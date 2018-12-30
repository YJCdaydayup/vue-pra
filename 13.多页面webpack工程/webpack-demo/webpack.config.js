var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['jquery','./src/js/common.js'],
        index: './src/js/index.js',
        cart: './src/js/cart.js'
    },
    output: {
        path: __dirname + '/dist',
        filename:'js/[name].js',
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.join(__dirname, "src"),
                loaders: [
                    "style-loader",
                    "css-loader"
                ]
            },
            // {
            //     test: /\.css$/,
            //     include: path.join(__dirname, 'src'),
            //     exclude: /node_modules/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: 'css-loader'
            //     })
            // },
            {
                test: /\.js$/,
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
        new CleanWebpackPlugin(["./dist"],{
            root: path.join(__dirname + ""),
            verbose: true,
            dry: false
        }),

        // 合并所有公共第三方插件
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            chunks: ["index", 'cart', "vendor"],
            mikChunk: 3
        }),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: "head",
            chunks: ["index","vendor"],
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: "cart.html",
            template: "./src/cart.html",
            inject: "head",
            chunks: ["cart","vendor"]
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new ExtractTextPlugin("index.css")
    ]
    // 方便看源码
    // devtool: '#source-map'
}