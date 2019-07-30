const argon2 = require('argon2-browser');

argon2
    .hash({
        pass: 'p@ssw0rd',
        salt: 'somesalt'
    })
    .then(hash => {
        console.log(`Encoded: ${hash.encoded}`);
        console.log(`Hex: ${hash.hashHex}`);
    });
