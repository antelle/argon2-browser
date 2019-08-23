/**
 * @enum
 */
const ArgonType = {
    Argon2d: 0,
    Argon2i: 1,
    Argon2id: 2
};

function loadModule(mem) {
    if (loadModule._promise) {
        return loadModule._promise;
    }
    if (loadModule._module) {
        return Promise.resolve(loadModule._module);
    }
    let promise;
    if (
        global.process &&
        global.process.versions &&
        global.process.versions.node
    ) {
        promise = loadWasmModule().then(Module => new Promise(resolve => {
            Module.postRun.push(() => resolve(Module));
        }));
    } else {
        promise = loadWasmBinary().then(wasmBinary => {
            const wasmMemory = mem ? createWasmMemory(mem) : undefined;
            return initWasm(wasmBinary, wasmMemory);
        });
    }
    loadModule._promise = promise;
    return promise.then(Module => {
        loadModule._module = Module;
        delete loadModule._promise;
        return Module;
    });
}

function initWasm(wasmBinary, wasmMemory) {
    return new Promise(resolve => {
        global.Module = {
            wasmBinary,
            wasmMemory,
            postRun() {
                resolve(Module);
            }
        };
        return loadWasmModule();
    });
}

function loadWasmModule() {
    if (global.loadArgon2WasmModule) {
        return global.loadArgon2WasmModule();
    }
    return Promise.resolve(require('../dist/argon2.js'));
}

function loadWasmBinary() {
    if (global.loadArgon2WasmBinary) {
        return global.loadArgon2WasmBinary();
    }
    return import('../dist/argon2.wasm').then(wasmModule => {
        return decodeWasmBinary(wasmModule.default);
    });
}

function decodeWasmBinary(base64) {
    const text = atob(base64);
    const binary = new Uint8Array(new ArrayBuffer(text.length));
    for (let i = 0; i < text.length; i++) {
        binary[i] = text.charCodeAt(i);
    }
    return binary;
}

function createWasmMemory(mem) {
    const KB = 1024 * 1024;
    const MB = 1024 * KB;
    const GB = 1024 * MB;
    const WASM_PAGE_SIZE = 64 * 1024;

    const totalMemory = (2 * GB - 64 * KB) / 1024 / WASM_PAGE_SIZE;
    const initialMemory = Math.min(
        Math.max(Math.ceil((mem * 1024) / WASM_PAGE_SIZE), 256) + 256,
        totalMemory
    );

    return new WebAssembly.Memory({
        initial: initialMemory,
        maximum: totalMemory
    });
}

function allocateArray(Module, strOrArr) {
    const arr =
        strOrArr instanceof Uint8Array || strOrArr instanceof Array
            ? strOrArr
            : new TextEncoder().encode(strOrArr);
    const nullTerminatedArray = new Uint8Array([...arr, 0]);
    return Module.allocate(nullTerminatedArray, 'i8', Module.ALLOC_NORMAL);
}

/**
 * Argon2 hash
 * @param {string|Uint8Array} params.pass - password string
 * @param {string|Uint8Array} params.salt - salt string
 * @param {number} [params.time=1] - the number of iterations
 * @param {number} [params.mem=1024] - used memory, in KiB
 * @param {number} [params.hashLen=24] - desired hash length
 * @param {number} [params.parallelism=1] - desired parallelism
 * @param {number} [params.type=argon2.ArgonType.Argon2d] - hash type:
 *      argon2.ArgonType.Argon2d
 *      argon2.ArgonType.Argon2i
 *      argon2.ArgonType.Argon2id
 *
 * @return Promise
 *
 * @example
 *  argon2.hash({ pass: 'password', salt: 'somesalt' })
 *      .then(h => console.log(h.hash, h.hashHex, h.encoded))
 *      .catch(e => console.error(e.message, e.code))
 */
function argon2Hash(params) {
    const mCost = params.mem || 1024;
    return loadModule(mCost).then(Module => {
        const tCost = params.time || 1;
        const parallelism = params.parallelism || 1;
        const pwd = allocateArray(Module, params.pass);
        const pwdlen = params.pass.length;
        const salt = allocateArray(Module, params.salt);
        const saltlen = params.salt.length;
        const hash = Module.allocate(
            new Array(params.hashLen || 24),
            'i8',
            Module.ALLOC_NORMAL
        );
        const hashlen = params.hashLen || 24;
        const encoded = Module.allocate(
            new Array(512),
            'i8',
            Module.ALLOC_NORMAL
        );
        const encodedlen = 512;
        const argon2Type = params.type || ArgonType.Argon2d;
        const version = 0x13;
        let err;
        let res;
        try {
            res = Module._argon2_hash(
                tCost,
                mCost,
                parallelism,
                pwd,
                pwdlen,
                salt,
                saltlen,
                hash,
                hashlen,
                encoded,
                encodedlen,
                argon2Type,
                version
            );
        } catch (e) {
            err = e;
        }
        let result;
        if (res === 0 && !err) {
            let hashStr = '';
            const hashArr = new Uint8Array(hashlen);
            for (let i = 0; i < hashlen; i++) {
                const byte = Module.HEAP8[hash + i];
                hashArr[i] = byte;
                hashStr += ('0' + (0xff & byte).toString(16)).slice(-2);
            }
            const encodedStr = Module.UTF8ToString(encoded);
            result = { hash: hashArr, hashHex: hashStr, encoded: encodedStr };
        } else {
            try {
                if (!err) {
                    err = Module.UTF8ToString(
                        Module._argon2_error_message(res)
                    );
                }
            } catch (e) {}
            result = { message: err, code: res };
        }
        try {
            Module._free(pwd);
            Module._free(salt);
            Module._free(hash);
            Module._free(encoded);
        } catch (e) {}
        if (err) {
            throw result;
        } else {
            return result;
        }
    });
}

/**
 * Argon2 verify function
 * @param {string} params.pass - password string
 * @param {string|Uint8Array} params.encoded - encoded hash
 * @param {number} [params.type=argon2.ArgonType.Argon2d] - hash type:
 *      argon2.ArgonType.Argon2d
 *      argon2.ArgonType.Argon2i
 *      argon2.ArgonType.Argon2id
 *
 * @returns Promise
 *
 * @example
 *  argon2.verify({ pass: 'password', encoded: 'encoded-hash' })
 *      .then(() => console.log('OK'))
 *      .catch(e => console.error(e.message, e.code))
 */
function argon2Verify(params) {
    return loadModule().then(Module => {
        const pwd = allocateArray(Module, params.pass);
        const pwdlen = params.pass.length;
        const enc = allocateArray(Module, params.encoded);
        let argon2Type = params.type;
        if (argon2Type === undefined) {
            let typeStr = params.encoded.split('$')[1];
            if (typeStr) {
                typeStr = typeStr.replace('a', 'A');
                argon2Type = ArgonType[typeStr] || ArgonType.Argon2d;
            }
        }
        let err;
        let res;
        try {
            res = Module._argon2_verify(enc, pwd, pwdlen, argon2Type);
        } catch (e) {
            err = e;
        }
        let result;
        if (res || err) {
            try {
                if (!err) {
                    err = Module.UTF8ToString(
                        Module._argon2_error_message(res)
                    );
                }
            } catch (e) {}
            result = { message: err, code: res };
        }
        try {
            Module._free(pwd);
            Module._free(enc);
        } catch (e) {}
        if (err) {
            throw result;
        } else {
            return result;
        }
    });
}

module.exports = {
    ArgonType,
    hash: argon2Hash,
    verify: argon2Verify
};
