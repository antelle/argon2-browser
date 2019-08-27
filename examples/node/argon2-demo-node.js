const argon2 = require('argon2-browser');

argon2
    .hash({
        pass: 'p@ssw0rd',
        salt: 'somesalt'
    })
    .then(hash => {
        console.log(`Encoded: ${hash.encoded}`);
        console.log(`Hex: ${hash.hashHex}`);

        argon2
            .verify({
                pass: 'p@ssw0rd',
                encoded: hash.encoded
            })
            .then(() => console.log('Verified OK'))
            .catch(e => console.error('Error: ', e));
    })
    .catch(e => console.error('Error: ', e));
