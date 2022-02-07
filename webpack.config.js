const path = require('path');
const webpack = require('webpack');

const getConfig = (inlineWasm) => ({
    mode: 'production',
    entry: './lib/argon2.js',
    output: {
        library: {
            name: 'argon2',
            type: 'umd',
        },
        globalObject: 'this',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: inlineWasm ? 'argon2-bundled.min.js' : 'argon2.min.js',
    },
    module: {
        noParse: /\.wasm$/,
        rules: [{
            test: /\.wasm$/,
            loader: inlineWasm ? 'base64-loader' : 'null-loader',
            type: 'javascript/auto',
        }, {
            test: /dist\/argon2\.js$/,
            use: [{
                loader: path.resolve('wrap-em.js'),
            }]
        }],
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_WASM_INLINED: JSON.stringify(inlineWasm),
            ...inlineWasm && { process: 'undefined' },
        }),
    ],
    externals: inlineWasm
        ? {}
        : {
            path: 'path',
            fs: 'fs',
        },
    resolve: {
        fallback: {
            path: false,
            fs: false,
            Buffer: false,
            process: false,
        },
    },
    node: false,
});

module.exports = [getConfig(true), getConfig(false)];
