var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: './app',
    output: {
        path: __dirname + '/dist',
        filename: 'all.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};