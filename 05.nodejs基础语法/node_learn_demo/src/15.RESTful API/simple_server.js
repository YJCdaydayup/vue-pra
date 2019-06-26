// var express = require('express')
//
// var app = express();

// app.get('/', function (req, res) {
//     res.send('123')
// })
//
// app.listen(8088, function () {
//
// })

var http = require('http');

var client = http.request({
    host: '127.0.0.1',
    port: '8081',
    path: '/addUser'
}, function (res) {
    var body = '';
    res.on('data', function (data) {
        body += data;
    })

    res.on('end', function () {
        console.log(body);
    })
})
client.end();