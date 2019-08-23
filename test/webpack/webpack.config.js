const path = require('path');

module.exports = {
    mode: 'production',
    entry: './tests.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    node: {
        __dirname: false,
        fs: 'empty',
        Buffer: false,
        process: false
    },
    resolve: {
        alias: {
            'argon2-browser': path.resolve(__dirname, '../..')
        }
    },
    module: {
        noParse: /\.wasm$/,
        rules: [
            {
                test: /\.wasm$/,
                loaders: ['base64-loader'],
                type: 'javascript/auto'
            }
        ]
    },
    performance: {
        hints: false
    }
};
