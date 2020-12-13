const path = require('path');

module.exports = {
    mode: 'production',
    entry: './tests.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            'argon2-browser': path.resolve(__dirname, '../..'),
        },
        fallback: {
            path: false,
            fs: false,
            Buffer: false,
            process: false,
        },
    },
    module: {
        noParse: /\.wasm$/,
        rules: [
            {
                test: /\.wasm$/,
                loader: 'base64-loader',
                type: 'javascript/auto',
            },
        ],
    },
    performance: {
        hints: false,
    },
};
