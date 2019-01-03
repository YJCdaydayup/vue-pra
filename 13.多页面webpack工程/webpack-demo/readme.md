### 1.由于使用requirejs来定义模块，引用的第三方模块会打包成0.js，html页面里面看不到，但是在资源里面会异步加载这个0.js文件。
### 2.clean-webpack-plugin 每次打包删除dist目录
### 3.extract-text-webpack-plugin将css抽取出来放入一个文件中再导入页面内,需要在plugins里面new一下才可以
### 4.当打包完后跑起来报错，如果是报define找不到或者一些js的错误，那么需要使用babel-loader进行解析，现在使用的是babel-preset-env了
### 5.jquery打包成全局变量进行使用：
1.vendor: ['jquery','./src/js/common.js']
       定义成公用模块
      new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            chunks: ["index", 'cart', "vendor"],
            mikChunk: 3
        }),
2、安装expose-loader
npm install --save expose-loader
3、在webpack.config中加入下面这段loader代码
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
4.直接开始使用$即可

### 6.UglifyJsPlugin对js进行压缩，minify: {removeComments: true}这个属性在使用模版时对html进行压缩

### 7.卸载插件 cnpm uni --save-dev babel-loader 即可

### 8.安装@^2.00版本，就会安装2.00和3.00之间的某个版本

### 9.可以直接使用require.js的语法来写js,css文件直接import进来来导入样式
