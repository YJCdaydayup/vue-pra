var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/js/index.js',
        cart: './src/js/cart.js',
        vendor: ["jquery", './src/js/common.js'],
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     include: __dirname + '/src',
            //     loaders: [
            //         "style-loader",
            //         "css-loader"
            //     ]
            // },
            {
                test: /\.css$/,
                // include: __dirname + '/src',
                exclude: /node_modules/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                include: __dirname + '/src',
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["env"]
                }
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["./dist"], {
            root: __dirname + '',
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'head',
            chunks: ['index','vendor'],
            minify: {
                removeCommonts: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            template: './src/cart.html',
            inject: 'head',
            chunks: ['cart','vendor']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['index','cart','vendor'],
            mikChunk: 3
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new ExtractTextWebpackPlugin("index.css")
    ]
}
