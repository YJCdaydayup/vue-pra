let HtmlWebpackPlugin = require('html-webpack-plugin')
let { VueLoaderPlugin } = require('vue-loader')
let CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
    entry: {
        cart: './src/enties/cart.js',
        main: './src/enties/main.js',
        verify: './src/enties/veriform.js',
        chart: './src/enties/chart.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
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
            },
            // 解析vue中的stylus，可以直接把里面的stylus样式作为stylus文件来解析
            {
                test: /\.stylus$/,
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
            },
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
            },
            {
                test: /\.css$/,
                loaders: [
                    'vue-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index1.html',
            template: './src/mounts/cart.html',
            inject: 'body',
            chunks: ['cart']
        }),
        new HtmlWebpackPlugin({
            filename: 'index2.html',
            template: './src/mounts/main.html',
            inject: 'body',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'index3.html',
            template: './src/mounts/main.html',
            inject: 'body',
            chunks: ['verify']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/mounts/chart.html',
            inject: 'body',
            chunks: ['chart']
        }),
        new CleanWebpackPlugin(['./dist'], {
            root: __dirname + '',
            verbose: true,
            dry: true
        })
    ]
}
