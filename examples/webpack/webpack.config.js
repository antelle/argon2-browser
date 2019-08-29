const path = require('path');

// WebPack has native support for WebAssembly modules, however it's not ideal
// and in our case it's introducing more issues than it solves.
//
// When building your own config, please make sure important bits
// of this configuration are included there, otherwise you're likely to
// see the same errors.
//
// If don't include these hacks and it still compile successfully,
// it means that you're using a more modern version of WebPack.
// I'd be happy if you let me know that it's no longer needed!
module.exports = {
    mode: 'production',
    entry: './argon2-demo-webpack.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    // We're using different node.js modules in our code,
    // this prevents WebPack from failing on them or embedding
    // polyfills for them into the bundle.
    //
    // Error: Module not found: Error: Can't resolve 'fs'
    node: {
        __dirname: false,
        fs: 'empty',
        Buffer: false,
        process: false
    },
    module: {
        // Makes WebPack think that we don't need to parse this module,
        // otherwise it tries to recompile it, but fails
        //
        // Error: Module not found: Error: Can't resolve 'env'
        noParse: /\.wasm$/,
        rules: [
            {
                test: /\.wasm$/,
                // Tells WebPack that this module should be included as
                // base64-encoded plaintext and not as code
                loaders: ['base64-loader'],
                // Disables very WebPack opinion where WebAssembly should be,
                // makes it think that it's not WebAssembly
                //
                // Error: WebAssembly module is included in initial chunk.
                type: 'javascript/auto'
            }
        ]
    }
};
