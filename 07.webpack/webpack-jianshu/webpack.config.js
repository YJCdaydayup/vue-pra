const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle-[hash].js"
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: false,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // modules: true,
                        //     localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new ExtractTextPlugin(),
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
    optimization: {
        minimizer: [
            new UglifyjsPlugin({
                uglifyOptions: {
                    compress: true
                }
            })
        ]
    }
};
