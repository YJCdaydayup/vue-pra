/**
 * 1.基于REST架构的Web Service就是RESRTful,也是基于express的实现
 * 轻量 通过HTTP传输数据  RESTful方法已成为最常见的替代方法，可以使用各种语言实现客户端(java perl Ruby PHP Python JS)
 *
 * 2.RESTful Web服务可以通过自动客户端或者代表用户的应用程序访问
 **/

/**
 *
 序号    URI    HTTP 方法    发送内容    结果
 1    listUsers    GET    空    显示所有用户列表
 2    addUser    POST    JSON 字符串    添加新用户
 3    deleteUser    DELETE    JSON 字符串    删除用户
 4    :id    GET    空    显示用户详细信息
 **/

var express = require('express')
var app = express();
var fs = require('fs');

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + '/users.json', function (err, data) {
        res.end(data);
    })
})

var user = {
    user4: {
        name: "Sara",
        password: 'password4',
        profession: 'teacher',
        id: 4
    }
}
app.get('/addUser', function (req, res) {
    fs.readFile(__dirname + '/users.json', function (err, data) {
        if (!err) {
            var result = JSON.parse(data);
            result['user4'] = user.user4;

            fs.writeFile(__dirname + '/users.json', JSON.stringify(result), function (err) {
                if (!err) {
                    res.end(JSON.stringify(result))
                }
            })
        }
    })
})

app.get('/deleteUser', function (req, res) {
    fs.readFile('users.json', 'utf8', function (err, data) {
        var result = JSON.parse(data);
        delete result[ 'user' + req.query.index];
        res.send(JSON.stringify(result));
    });
});


app.get('/:id', function (req, res) {
    fs.readFile('users.json', 'utf8', function (err, data) {
        if (!err) {
            var result = JSON.parse(data);
            var id = req.params.id;
            res.send(JSON.stringify(result['user' + id]))
        }
    })
})


app.listen(8081, '127.0.0.1', function () {
    console.log('启动REST服务器')
})