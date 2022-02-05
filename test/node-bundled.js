describe('Node.js bundled', function () {
    global.chai = require('chai');

    before(() => {
        global.argon2 = require('../dist/argon2-bundled.min');
    });

    ['./suite/hash', './suite/verify'].forEach((name) => {
        delete require.cache[require.resolve(name)];
        require(name);
    });
});
