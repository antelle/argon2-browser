describe('argon2.verify', function () {
    const { assert } = chai;

    it('should verify a hash', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            encoded:
                '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$JGOjI98eRw4ahgg28250Fz2BKEFl48Xm',
        });
    });

    it('should throw an error for invalid hash', async function () {
        let error = undefined;
        await argon2
            .verify({
                pass: 'p@ssw0rd2',
                encoded:
                    '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$JGOjI98eRw4ahgg28250Fz2BKEFl48Xm',
            })
            .catch((e) => (error = e));
        assert.ok(error);
        assert.ok(error.code);
        assert.strictEqual(
            error.message,
            'The password does not match the supplied hash'
        );
    });

    it('should be able to work several times', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            encoded:
                '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$JGOjI98eRw4ahgg28250Fz2BKEFl48Xm',
        });
        await argon2.verify({
            pass: 'p@ssw0rd',
            encoded:
                '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$JGOjI98eRw4ahgg28250Fz2BKEFl48Xm',
        });
    });

    it('should verify Argon2d with type specified', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            encoded:
                '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$JGOjI98eRw4ahgg28250Fz2BKEFl48Xm',
            type: argon2.ArgonType.Argon2d,
        });
    });

    it('should throw an error if invalid type is specified', async function () {
        let error = undefined;
        await argon2
            .verify({
                pass: 'p@ssw0rd',
                encoded:
                    '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$JGOjI98eRw4ahgg28250Fz2BKEFl48Xm',
                type: argon2.ArgonType.Argon2i,
            })
            .catch((e) => (error = e));
        assert.ok(error);
        assert.strictEqual(error.message, 'Decoding failed');
    });

    it('should verify Argon2i', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            encoded:
                '$argon2i$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$I4odzyBxoIvAnqjao5xt4/xS02zts+Jb',
        });
    });

    it('should verify Argon2id', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            encoded:
                '$argon2id$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$dF4LZGqnznPWATUG/6m1Yp/Id1nKVSlk',
        });
    });

    it('should verify hash with different time complexity', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            encoded:
                '$argon2d$v=19$m=1024,t=10,p=1$c29tZXNhbHQ$uo6bzQ2Wjb9LhxGoSHnaMrIOAB/6dGAS',
        });
    });

    it('should verify hash with different memory complexity', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            encoded:
                '$argon2d$v=19$m=2048,t=1,p=1$c29tZXNhbHQ$6OXzaE6bdwMuoUqJt5U1TCrfJBF/8X3O',
        });
    });

    it('should verify hash with different length', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            encoded:
                '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$3w1C/UXK5b+K9eGlhctsuw1TivVU1JFCmB+DmM+MIiY',
        });
    });

    it('should verify hash with different parallelism', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            encoded:
                '$argon2d$v=19$m=1024,t=1,p=4$c29tZXNhbHQ$0/nLmgLRIKqzzOET6/YYHgZrp0xJjACg',
        });
    });

    it('should verify hash with unicode characters', async function () {
        await argon2.verify({
            pass: '汉字漢字',
            encoded:
                '$argon2id$v=19$m=1024,t=1,p=1$YXNkZmFzZGZhc2RmYXNkZg$zzqgQLEjqikDwII1Qk2ZbyoCG12D25W7tXSgejiwiS0',
        });
    });

    it('should verify a hash with additional data', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            ad: new Uint8Array([1, 2, 3]),
            encoded:
                '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$CuATwqimHlFHq0mTT0qnozY4kCjrGg7X',
        });
    });

    it('should verify a hash with a secret', async function () {
        await argon2.verify({
            pass: 'p@ssw0rd',
            secret: new Uint8Array([1, 2, 3]),
            encoded:
                '$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$kPOHk/DlE6du1nkbKKom8FV+fcNjviLW',
        });
    });
});
