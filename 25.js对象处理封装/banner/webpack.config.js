let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        // hot: true,
        compress: true,
        host: 'localhost',
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: 'body'
        }),
    ]
}