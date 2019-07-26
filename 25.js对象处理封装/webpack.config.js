let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './float.html',
            inject: 'body'
        }),
    ]
}