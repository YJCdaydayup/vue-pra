var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/js/index.js',
        cart: './src/js/cart.js'
    },
    output: {
        path: __dirname + '/dist',
        filename:'js/[name].js',
        publicPath: ""
    },
    module: {

    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: "head"
        }),
        new htmlWebpackPlugin({
            filename: "cart.html",
            template: "./src/cart.html",
            inject: "head"
        })
    ]
    // 方便看源码
    // devtool: '#source-map'
}