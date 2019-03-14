var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index',
        cart: './src/js/cart',
        vendor: ['./src/js/common.js','jquery']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: __dirname + '/src',
                use:  [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: __dirname + '/src',
                loader: 'babel-loader',
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
        new CleanWebpackPlugin({
            root: __dirname + '',
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'head',
            chunks: ['index', 'vendor'],
            minify: {
                removeCommonts: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            template: './src/cart.html',
            inject: 'head',
            chunks: ['cart', 'vendor']
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: 'vendor',
            chunks: ['index','cart','vendor'],
            mikChunk: 3
        })
    ]

}
