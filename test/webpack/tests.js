mocha.setup('bdd');

global.chat = require('chai');
global.argon2 = require('argon2-browser');

require('../suite/hash');
require('../suite/verify');

const stdout = [];
const stderr = [];

console.log = (...args) => stdout.push(args);
console.info = (...args) => stdout.push(args);
console.error = (...args) => stderr.push(args);
console.warn = (...args) => stderr.push(args);

mocha.reporter('json');
mocha.run(() => window.argon2testResults = { stdout, stderr });
