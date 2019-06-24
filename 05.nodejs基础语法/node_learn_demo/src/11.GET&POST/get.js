var http = require('http')
var url = require('url')
var util = require('util')

http.createServer(function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    })

    var params = url.parse(req.url, true).query;
    res.end(JSON.stringify(params))
    // res.write('网站名' + params.name);
    // res.write('\n');
    // res.write('URL' + params.url);
    // res.end();
}).listen(3000);