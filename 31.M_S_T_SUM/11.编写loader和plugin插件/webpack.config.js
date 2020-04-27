const path = require('path')
const MyPlugin = require('./myplugin')

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: path.resolve('./myloader.js'),
                exclude: path.join(__dirname, 'node_modules')
            }
        ]
    },
    plugins: [
        new MyPlugin()
    ]
}