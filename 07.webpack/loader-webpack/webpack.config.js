var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].budle.js'
    },
    module: {
    	rules: [
    		{
    			test: /\.js$/,
    			loader: 'babel-loader',
    			query: {
    				presets: ['latest']
    			}
    		}
    	]
    },
    plugins: [
    	new htmlWebpackPlugin({
    		filename: 'index.html',
    		template: 'index.html',
    		inject: 'body'
    	})
    ]
}
