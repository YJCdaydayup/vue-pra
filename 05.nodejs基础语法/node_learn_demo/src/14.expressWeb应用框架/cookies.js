var express = require('express')
var cookieparser = require('cookie-parser')
var util = require('util')
var app = express();

app.use(cookieparser());

app.get('/', function (req, res) {
    console.log(req.cookies)
})

var server = app.listen(8081, '172.23.1.128',function () {
    console.log(server.address().address);
    console.log(server.address())
})