let HtmlWebpackPlugin = require('html-webpack-plugin')
let { VueLoaderPlugin } = require('vue-loader')
let CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
    entry: {
        cart: './src/enties/cart.js',
        main: './src/enties/main.js',
    },
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
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                // options: vueLoaderConfig
            },
            {
                test: /\.scss$/,
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
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            template: './src/mounts/cart.html',
            inject: 'body',
            chunks: ['cart']
        }),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './src/mounts/main.html',
            inject: 'body',
            chunks: ['main']
        }),
        new CleanWebpackPlugin(['./dist'], {
            root: __dirname + '',
            verbose: true,
            dry: true
        })
    ]
}
