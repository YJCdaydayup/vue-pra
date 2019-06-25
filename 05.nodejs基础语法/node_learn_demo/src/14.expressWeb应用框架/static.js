var express = require('express')

var app = express();

// 设置静态资源的访问，如图片，CSS，JS文件，放在public目录下，设置图片的获取路径
app.use('/public', express.static('public'))

app.get('/', function (req, res) {

    console.log(JSON.stringify(req));

    res('Hello World');
})

var server = app.listen(8081, function () {

})

