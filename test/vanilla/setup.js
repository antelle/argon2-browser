window.global = window;

const modules = {};

window.module = {
    set exports(exports) {
        const stack = new Error().stack;
        if (stack.includes('/lib/argon2.js')) {
            modules['argon2-browser'] = exports;
        } else if (stack.includes('/dist/argon2.js')) {
            modules['../dist/argon2.js'] = exports;
        }
    }
};

const loadWasmBinaryPromise = fetch('../../dist/argon2.wasm')
    .then(response => response.arrayBuffer())
    .then(ab => new Uint8Array(ab));

window.loadArgon2WasmBinary = function() {
    return loadWasmBinaryPromise;
};

window.loadArgon2WasmModule = function() {
    return import('../../dist/argon2.js').then(mod => {
        return mod;
    });
};

window.require = module => {
    switch (module) {
        case 'chai':
            return window.chai;
        default:
            if (modules[module]) {
                return modules[module];
            }
            throw new Error(`Module not found: ${module}`);
    }
};
