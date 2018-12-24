
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: "./src/lib/index.js",
    mode: "development",
    output: {
        path: path.join(__dirname,'./dist'),
        filename: "vue-toast-demo.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                include: __dirname + '/src'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}