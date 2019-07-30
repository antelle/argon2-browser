const argon2 = require('argon2-browser');

argon2
    .hash({
        pass: 'p@ssw0rd',
        salt: 'somesalt'
    })
    .then(hash => {
        document.querySelector('pre').innerText = `It works!
Encoded: ${hash.encoded}
Hex: ${hash.hashHex}`;
    });
