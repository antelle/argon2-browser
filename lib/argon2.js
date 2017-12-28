(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return (root.argon2 = factory());
        });
    } else {
        root.argon2 = factory();
    }
}(this, function () {
    'use strict';

    /**
     * @enum
     */
    var ArgonType = {
        Argon2d: 0,
        Argon2i: 1
    };

    function loadScript(src) {
        return new Promise(function (resolve, reject) {
            var el = document.createElement("script");
            el.src = src;
            el.onload = function () { resolve(); };
            el.onerror = function (error) { reject('Error loading script: ' + error); };
            document.body.appendChild(el);
        })
    }

    function allocateArray(strOrArr) {
        var arr = strOrArr instanceof Uint8Array || strOrArr instanceof Array ? strOrArr
            : Module.intArrayFromString(strOrArr);
        return Module.allocate(arr, 'i8', Module.ALLOC_NORMAL);
    }

    function argon2Hash(params) {
        if (!global.WebAssembly) {
            return new Promise(function (resolve, reject) {
                loadScript(params.asmFileUrl)
                    .then(function () {
                        global.Module.argon2_has_been_imported = true;
                        resolve(calcHash(params));
                    })
                    .catch(function (error) {
                        global.Module.argon2_has_been_imported = false;
                        reject("Error loading argon2-asm.min.js: " + error + ", " + params.cacheKey);
                    });
            })
        }

        //WebAssembly is supported by the browser

        return new Promise(function (resolve, reject) {
            if (global.Module && !global.Module._argon2_hash) {
                setTimeout(function () { argon2Hash(params).then(resolve).catch(reject) }, 10)
                return;
            }

            if (global.Module && global.Module.wasmJSMethod === 'native-wasm' && global.Module._argon2_hash) {
                if (global.Module.argon2_has_been_imported) {
                    setTimeout(function () { resolve(calcHash(params)) }, 10);
                } else {
                    loadScript(params.argon2FileUrl)
                        .then(function () {
                            global.Module.argon2_has_been_imported = true;
                            setTimeout(function () { resolve(calcHash(params)) }, 10);
                        })
                        .catch(function (error) {
                            global.Module.argon2_has_been_imported = false;
                            reject("Error loading argon2.min.js (WASM already loaded): " + error + ", " + params.cacheKey);
                        });
                }
                return
            }

            var KB = 1024 * 1024;
            var MB = 1024 * KB;
            var GB = 1024 * MB;
            var WASM_PAGE_SIZE = 64 * 1024;

            var totalMemory = (2 * GB - 64 * KB) / 1024 / WASM_PAGE_SIZE;
            var initialMemory = Math.min(Math.max(Math.ceil(params.mem * 1024 / WASM_PAGE_SIZE), 256) + 256, totalMemory);
            var wasmMemory = new WebAssembly.Memory({
                initial: initialMemory,
                maximum: totalMemory
            });

            global.Module = {
                wasmBinary: null,
                wasmJSMethod: 'native-wasm',
                asmjsCodeFile: params.asmFileUrl,
                wasmBinaryFile: params.wasmFileUrl,
                wasmMemory: wasmMemory,
                buffer: wasmMemory.buffer,
                TOTAL_MEMORY: initialMemory * WASM_PAGE_SIZE
            };

            var xhr = new XMLHttpRequest();
            xhr.open('GET', params.wasmFileUrl, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function () {
                global.Module.wasmBinary = xhr.response;
                global.Module.postRun = function () { return resolve(calcHash(params)); }
                loadScript(params.argon2FileUrl)
                    .then(function () {
                        global.Module.argon2_has_been_imported = true
                    })
                    .catch(function (error) {
                        global.Module.argon2_has_been_imported = false
                        reject("Error loading argon2.min.js: " + error + ", " + params.cacheKey)
                    })
            };
            xhr.onerror = function () {
                reject("Error loading wasm " + params.cacheKey)
            };
            xhr.send(null);
        })
    }

    function calcHash(params) {
        var tCost = params.time || 1;
        var mCost = params.mem || 1024;
        var parallelism = params.parallelism || 1;
        var pwd = allocateArray(params.pass);
        var pwdlen = params.pass.length;
        var salt = allocateArray(params.salt);
        var saltlen = params.salt.length;
        var hash = Module.allocate(new Array(params.hashLen || 24), 'i8', Module.ALLOC_NORMAL);
        var hashlen = params.hashLen || 24;
        var encoded = Module.allocate(new Array(512), 'i8', Module.ALLOC_NORMAL);
        var encodedlen = 512;
        var argon2Type = params.type || ArgonType.Argon2d;
        var version = 0x13;
        var err;
        try {
            var res = Module._argon2_hash(tCost, mCost, parallelism, pwd, pwdlen, salt, saltlen,
                hash, hashlen, encoded, encodedlen, argon2Type, version);
        } catch (e) {
            err = e;
        }
        var result;
        if (res === 0 && !err) {
            var hashStr = '';
            var hashArr = new Uint8Array(hashlen);
            for (var i = 0; i < hashlen; i++) {
                var byte = Module.HEAP8[hash + i];
                hashArr[i] = byte;
                hashStr += ('0' + (0xFF & byte).toString(16)).slice(-2);
            }
            var encodedStr = Module.Pointer_stringify(encoded);
            result = { hash: hashArr, hashHex: hashStr, encoded: encodedStr };
        } else {
            try {
                if (!err) {
                    err = Module.Pointer_stringify(Module._argon2_error_message(res))
                }
            } catch (e) {
            }
            result = { message: err, code: res };
        }
        try {
            Module._free(pwd);
            Module._free(salt);
            Module._free(hash);
            Module._free(encoded);
        } catch (e) { }
        if (err) {
            throw result;
        } else {
            return result;
        }
    }

    return {
        ArgonType: ArgonType,
        hash: argon2Hash
    };
}));

