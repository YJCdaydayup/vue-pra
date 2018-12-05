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
                exclude: __dirname + 'node_modules',
                include: __dirname + 'src',
                query: {
    				presets: ['latest']
    			}
    		},
            {
                test: /\.html$/,
                loader: 'html-loader'
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
