var express = require('express')
var bodyparser = require('body-parser')

var app = express();

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/public/' + 'index.html');
})


// 创建application/x-www-form-urlencoded 编码解析
var urlencodeParser = bodyparser.urlencoded({
    extended: true
})

// 这里的urlencodeParser如果写app.use(bodyparser.urlencoded({extended: true})就不用写了
app.post('/process_get', urlencodeParser, function (req, res) {
    var response = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    console.log(response)
    res.send(JSON.stringify(response))
})

app.listen(8081, function () {

})