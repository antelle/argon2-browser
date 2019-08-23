describe('Node.js', function() {
    setup();

    require('./suite/hash');
    require('./suite/verify');

    function setup() {
        const argon2 = require('..');

        const Module = require('module');
        const originalRequire = Module.prototype.require;

        Module.prototype.require = function(module) {
            if (module === 'argon2-browser') {
                return argon2;
            }
            return originalRequire.call(this, module);
        };
    }
});
