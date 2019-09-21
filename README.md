# Argon2 in browser [![Build status](https://travis-ci.org/antelle/argon2-browser.svg?branch=master)](https://travis-ci.org/antelle/argon2-browser)

Argon2 is a password-hashing function, the winner of Password Hashing Competition. Here Argon2 library is compiled for browser runtime.

[Live demo](https://antelle.github.io/argon2-browser)

[More about Argon2](https://github.com/P-H-C/phc-winner-argon2)

[Usage](#usage)

## The numbers

|                | Time, ms (lower is better) |
|----------------|----------------------------|
| Chrome WASM    | 360                        |
| Firefox WASM   | 340                        |
| Safari WASM    | 310                        |
| Native -O3 SSE | 90                         |
| Native -O3     | 140                        |
| Native -O1     | 300                        |
| Native -O0     | 750                        |

## Test Environment

Environment used to get the numbers above:

Algorithm parameters (`-d -t 100 -m 10 -p 1`):
- iterations: 100
- memory: 1MiB (1024 KiB)
- hash length: 32
- parallelism: 1
- argon2d

Environment:

- MacBook pro, Intel Core i5, 2.5GHz (x64), macOS 10.14.6 (18G95)
- Chrome 76.0.3809.100 (Official Build)
- Firefox 69.0.1
- Savari v13.0 (14608.1.49)
- native argon2 compiled from https://github.com/P-H-C/phc-winner-argon2 @4844d2f

## Code size

| File        | Code size, kB |
|-------------|---------------|
| argon2.js   | 16            |
| argon2.wasm | 31            |

## Is Argon2 modified?

The only change is [disabling threading support](https://github.com/antelle/argon2-browser/commit/4b8950395c8c03a888ba6f417a4001458cdd3231).

## Difficulties

Argon2 is using uint64, which is not supported by JavaScript.
This function is called ~30M times per one iteration:
```cpp
uint64_t fBlaMka(uint64_t x, uint64_t y) {
    const uint64_t m = UINT64_C(0xFFFFFFFF);
    const uint64_t xy = (x & m) * (y & m);
    return x + y + 2 * xy;
}
```

And this one:
```cpp
uint64_t rotr64(const uint64_t w, const unsigned c) {
    return (w >> c) | (w << (64 - c));
}
```

In C++, we can make use of SSE for 64-bit arithmetics. In JavaScript, when no 64-bit unsigned long type is available, different engines have different time penalties of this operation.

WASM can support 64-bit integers but it requires compilation with LLVM, and not as asm.js => wasm. But this build is producing bad wasm for now. A simple experiment can be found in [perf-test.c](perf-test.c): compiling it with i64 support in LLVM gives us 4x boost.

## JS Library

Until WASM is mature, js library is using only asm.js. Here's how to try it.

Install with npm:
```bash
npm install argon2-browser
```

Add script to your HTML:
```html
<script src="node_modules/argon2-browser/lib/argon2.js"></script>
```

Calculate the hash:
```javascript
argon2.hash({ pass: 'password', salt: 'somesalt' })
    .then(h => console.log(h.hash, h.hashHex, h.encoded))
    .catch(e => console.error(e.message, e.code))
```

Verify the encoded hash (if you need it):
```javascript
argon2.verify({ pass: 'password', encoded: 'enc-hash' })
    .then(() => console.log('OK'))
    .catch(e => console.error(e.message, e.code))
```

Bring your own bundler and promise polyfill.  
Other parameters:
```javascript
argon2.hash({
    // required
    pass: 'password',
    salt: 'salt',
    // optional
    time: 1, // the number of iterations
    mem: 1024, // used memory, in KiB
    hashLen: 24, // desired hash length
    parallelism: 1, // desired parallelism (will be computed in parallel only for PNaCl)
    type: argon2.ArgonType.Argon2d, // or argon2.ArgonType.Argon2i
    distPath: '' // asm.js script location, without trailing slash
})
// result
.then(res => {
    res.hash // hash as Uint8Array
    res.hashHex // hash as hex-string
    res.encoded // encoded hash, as required by argon2
})
// or error
.catch(err => {
    err.message // error message as string, if available
    err.code // numeric error code
})
```

## Usage

You can use this module in several ways: 

1. write the WASM loader manually, for example, if you need more control over memory ([example](docs/js/calc.js));
2. bundle it with WebPack or another bundler ([example](examples/webpack));
3. in vanilla js: [example](examples/vanilla);
4. in node.js: [example](examples/node) (see a note below).

## Node.js support

Of course you [can use](examples/node) generated asm.js code in node.js but it's not sensible: you will get much better speed by compiling native node.js addon, which is not that hard. Wait, it's already done, just install [this package](https://github.com/ranisalt/node-argon2).

## Is it used anywhere?

It is! [KeeWeb](https://github.com/keeweb/keeweb) (web-based password manager) is using both asm.js and WebAssembly Argon2 implementations.
[Check out the source code](https://github.com/keeweb/keeweb/blob/develop/app/scripts/util/kdbxweb/kdbxweb-init.js#L11), if you're interested.

## Building

You can build everything with
```bash
./build.sh
```

Prerequesties:
- emscripten with WebAssembly support ([howto](http://webassembly.org/getting-started/developers-guide/))
- CMake

## License

[MIT](https://opensource.org/licenses/MIT)
