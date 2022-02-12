# Argon2 in browser ![Build](https://github.com/antelle/argon2-browser/workflows/Build/badge.svg)

Argon2 is a password-hashing function, the winner of Password Hashing Competition. Here Argon2 library is compiled for browser runtime.

[Live demo](https://antelle.github.io/argon2-browser)

[More about Argon2](https://github.com/P-H-C/phc-winner-argon2)

[Usage](#usage)

## The numbers

|                   | Time, ms (lower is better) |
|-------------------|----------------------------|
| Chrome WASM       | 225                        |
| Chrome WASM+SIMD  | 119                        |
| Firefox WASM      | 195                        |
| Firefox WASM+SIMD | 135                        |
| Safari WASM       | 174                        |
| Native -O3 SSE    |  15                        |
| Native -O3        |  42                        |
| Native -O1        |  55                        |
| Native -O0        | 395                        |

## Test Environment

Environment used to get the numbers above:

Algorithm parameters (`-d -t 100 -m 10 -p 1`):
- iterations: 100
- memory: 1MiB (1024 KiB)
- hash length: 32
- parallelism: 1
- argon2d

Environment:

- MacBook pro 2020, Intel Core i7, 2.3GHz (x64), macOS 10.14.6 (18G95)
- Chrome 85.0.4183.83 (Official Build)
- Firefox 80.0.1
- Safari 13.1.2 (15609.3.5.1.3)
- native argon2 compiled from https://github.com/P-H-C/phc-winner-argon2 @440ceb9

## Code size

`ll -h dist`

| File        | Code size, kB |
|-------------|---------------|
| argon2.js   | 14            |
| argon2.wasm | 25            |

## Is Argon2 modified?

No, it's used a submodule from upstream.

## SIMD

SIMD is not quite here in WebAssembly, however for those who would like to give it a try,
we already provide a working build with SIMD. At the moment it works only in Chrome,
to be able to use it, you need to either add
[this origin trial](https://developers.chrome.com/origintrials/#/view_trial/-4708513410415853567) to your website,
or enable the SIMD feature in Chrome flags.

More about WebAssembly SIMD support in V8: https://v8.dev/features/simd

On Firefox you need to enable `javascript.options.wasm_simd` option in about:config.

To use the SIMD version, load `argon2-simd.wasm` instead of `argon2.wasm`.

## JS Library

The library can be installed from npm:
```bash
npm install argon2-browser
```

Then add this script to your HTML or use your favorite bundler:
```html
<script src="node_modules/argon2-browser/dist/argon2.min.js"></script>
```

Alternatively, you can use the bundled version, this way you can include just one script:
```html
<script src="node_modules/argon2-browser/dist/argon2-bundled.min.js"></script>
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
    parallelism: 1, // desired parallelism (it won't be computed in parallel, however)
    secret: new Uint8Array([...]), // optional secret data
    ad: new Uint8Array([...]), // optional associated data
    type: argon2.ArgonType.Argon2d, // Argon2d, Argon2i, Argon2id
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

```javascript
argon2.verify({
    // required
    pass: 'password',
    encoded: 'enc-hash',
    // optional
    secret: new Uint8Array([...]), // optional secret data
    ad: new Uint8Array([...]), // optional associated data
    type: argon2.ArgonType.Argon2d, // Argon2d, Argon2i, Argon2id. default: guess
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

## Bundlers

- WebPack: [examples/webpack](https://github.com/antelle/argon2-browser/tree/master/examples/webpack)
- create-react-app: [examples/react](https://github.com/antelle/argon2-browser/tree/master/examples/react). Derived from [#38](https://github.com/antelle/argon2-browser/issues/38#issuecomment-749690581)

## Node.js support

Of course you [can use](examples/node) generated WASM in node.js, but it's not sensible: you will get much better speed by compiling it as a native node.js addon, which is not that hard. Wait, it's already done, just install [this package](https://github.com/ranisalt/node-argon2).

## Is it used anywhere?

It is! [KeeWeb](https://github.com/keeweb/keeweb) (web-based password manager) is using it as a password hashing function implementation.
[Check out the source code](https://github.com/keeweb/keeweb/blob/develop/app/scripts/util/kdbxweb/kdbxweb-init.js#L11), if you're interested.

## Building

You can build everything with
```bash
./build.sh
```

Prerequisites:
- emscripten with WebAssembly support ([howto](http://webassembly.org/getting-started/developers-guide/))
- CMake

## License

[MIT](https://opensource.org/licenses/MIT)
