const path = require('path');

module.exports = {
    mode: 'production',
    entry: './argon2-demo-webpack.js',
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
    module: {
        noParse: /\.wasm$/,
        rules: [
            {
                test: /\.wasm$/,
                loaders: ['base64-loader'],
                type: 'javascript/auto'
            }
        ]
    }
};
