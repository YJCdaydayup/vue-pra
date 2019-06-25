/**
 * 1.Express是nodejs的Web应用框架
 * 核心:
 * 设置中间件响应HTTP请求
 * 定义路由表执行不同的HTTP请求动作
 * 通过向模版传递参数来动态渲染HTML页面
 **/

/**
 * 2.安装:
 * express
 * body-parser nodejs的中间件 处理JSON Raw Text URL编码的数据
 * cookie-parser 解析Cookie的工具，通过req.cookies可以取到传递的cookie转成对象
 * multer nodejs中间件 处理enctype="multipart/form-data"的表单数据
 *
 * cnpm install express --save
 * cnpm install cookie-parser --save
 * cnpm install multer --save
 **/

var express = require('express')
var app = express();

app.get('/', function (req, res) {
    console.log(req.baseUrl)
    console.log(req.body)
    console.log(req.cookie)
    console.log(req.fresh)
    console.log(req.hostname)
    console.log(req.ip)
    console.log(req.originalUrl)
    console.log(req.params)
    console.log(req.path)
    console.log(req.query)

    // res.cookie()
    // res.clearCookie();
    // res.download('./express.js')
    res.get();
})

var server = app.listen(8081, function (res) {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host)
    console.log(port)
})