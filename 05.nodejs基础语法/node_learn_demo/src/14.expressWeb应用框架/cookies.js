var express = require('express')
var cookieparser = require('cookie-parser')
var util = require('util')
var app = express();

app.use(cookieparser());

app.get('/', function (req, res) {
    res.cookie('name','Sara');
    res.send('设置了cookie')
})

app.get('/abc',(req, res)=>{
    console.log(req.cookies);
    res.send(req.cookies.name);
})

var server = app.listen(8081,function () {
    console.log(server.address().address);
    console.log(server.address())
})