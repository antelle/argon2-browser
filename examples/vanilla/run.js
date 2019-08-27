argon2
    .hash({
        pass: 'p@ssw0rd',
        salt: 'somesalt'
    })
    .then(hash => {
        document.querySelector('pre').innerText =
            `Encoded: ${hash.encoded}\n` +
            `Hex: ${hash.hashHex}\n`;

        argon2
            .verify({
                pass: 'p@ssw0rd',
                encoded: hash.encoded
            })
            .then(() => document.querySelector('pre').innerText += 'Verified OK')
            .catch(e => console.error('Error: ', e));
    })
    .catch(e => console.error('Error: ', e));
