describe('argon2.hash', function() {
    const { assert } = chai;

    it('should compute hash', async function() {
        const hash = await argon2.hash({
            pass: 'p@ssw0rd',
            salt: 'somesalt'
        });
        assert.ok(hash);
        assert.deepStrictEqual(hash.hash, new Uint8Array([
            36, 99, 163, 35, 223, 30, 71, 14, 26, 134, 8, 54, 243, 110,
            116, 23, 61, 129, 40, 65, 101, 227, 197, 230
        ]));
        assert.strictEqual(hash.hashHex, '2463a323df1e470e1a860836f36e74173d81284165e3c5e6');
        assert.strictEqual(hash.encoded, '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$JGOjI98eRw4ahgg28250Fz2BKEFl48Xm');
    });

    it('should be able to work several times', async function() {
        let hash = await argon2.hash({
            pass: 'p@ssw0rd',
            salt: 'somesalt'
        });
        assert.ok(hash);
        assert.strictEqual(hash.hashHex, '2463a323df1e470e1a860836f36e74173d81284165e3c5e6');
        assert.strictEqual(hash.encoded, '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$JGOjI98eRw4ahgg28250Fz2BKEFl48Xm');

        hash = await argon2.hash({
            pass: 'p@ssw0rd2',
            salt: 'somesalt'
        });
        assert.ok(hash);
        assert.strictEqual(hash.hashHex, 'f02360855fe22752362451bcd41206041304ce7908b5645b');
        assert.strictEqual(hash.encoded, '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$8CNghV/iJ1I2JFG81BIGBBMEznkItWRb');
    });

    it('should compute hash for Argon2d', async function() {
        const hash = await argon2.hash({
            pass: 'p@ssw0rd',
            salt: 'somesalt',
            type: argon2.ArgonType.Argon2d
        });
        assert.strictEqual(hash.encoded, '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$JGOjI98eRw4ahgg28250Fz2BKEFl48Xm');
    });

    it('should compute hash for Argon2i', async function() {
        const hash = await argon2.hash({
            pass: 'p@ssw0rd',
            salt: 'somesalt',
            type: argon2.ArgonType.Argon2i
        });
        assert.strictEqual(hash.encoded, '$argon2i$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$I4odzyBxoIvAnqjao5xt4/xS02zts+Jb');
    });

    it('should compute hash for Argon2id', async function() {
        const hash = await argon2.hash({
            pass: 'p@ssw0rd',
            salt: 'somesalt',
            type: argon2.ArgonType.Argon2id
        });
        assert.strictEqual(hash.encoded, '$argon2id$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$dF4LZGqnznPWATUG/6m1Yp/Id1nKVSlk');
    });

    it('should compute hash with different time complexity', async function() {
        const hash = await argon2.hash({
            pass: 'p@ssw0rd',
            salt: 'somesalt',
            time: 10
        });
        assert.strictEqual(hash.encoded, '$argon2d$v=19$m=1024,t=10,p=1$c29tZXNhbHQ$uo6bzQ2Wjb9LhxGoSHnaMrIOAB/6dGAS');
    });

    it('should compute hash with different memory complexity', async function() {
        const hash = await argon2.hash({
            pass: 'p@ssw0rd',
            salt: 'somesalt',
            mem: 2048
        });
        assert.strictEqual(hash.encoded, '$argon2d$v=19$m=2048,t=1,p=1$c29tZXNhbHQ$6OXzaE6bdwMuoUqJt5U1TCrfJBF/8X3O');
    });

    it('should compute hash with different length', async function() {
        const hash = await argon2.hash({
            pass: 'p@ssw0rd',
            salt: 'somesalt',
            hashLen: 32
        });
        assert.strictEqual(hash.encoded, '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$3w1C/UXK5b+K9eGlhctsuw1TivVU1JFCmB+DmM+MIiY');
    });

    it('should compute hash with different parallelism', async function() {
        const hash = await argon2.hash({
            pass: 'p@ssw0rd',
            salt: 'somesalt',
            parallelism: 4
        });
        assert.strictEqual(hash.encoded, '$argon2d$v=19$m=1024,t=1,p=4$c29tZXNhbHQ$0/nLmgLRIKqzzOET6/YYHgZrp0xJjACg');
    });
});
