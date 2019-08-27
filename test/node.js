describe('Node.js', function() {
    global.chai = require('chai');
    global.argon2 = require('..');

    require('./suite/hash');
    require('./suite/verify');
});
