const {resolve} = require('path')
const r = (url) => resolve(__dirname, url)

const ExtracttextPlugin = require('extract-text-plugin')
const extractSass = new ExtracttextPlugin({
    filename: '[name].wxss'
})

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-plugin')

module.exports = {
    devtool: false,
    output: {
        path: r('./mina'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            utils: r('./../utils/util')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env', {modules: false}]
                }
            },
            {
                test: /\.sass$/,
                use: [
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) =>[
                                require('autoprefixer')({
                                    browers: [
                                        'last 2 version'
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true
                        }
                    }
                ],
                fallback: 'style-loader'
            },
            {
                test: /\.mina$/,
                loader: 'wechat-mina-loader',
                options: {
                    path: r('../'),
                    dist: './mina'
                }
            }
        ]
    },
    plugins: [
        extractSass,
        new CopyWebpackPlugin([
            {
                from: {
                    glob: 'page/**/*.json'
                },
                to: ''
            },
            {
                from: 'static',
                to: 'static'
            }
        ]),
        new webpack.optimize.ModuleConcatnationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        }),
        // 进度条插件
        new ProgressBarPlugin()
    ]
}