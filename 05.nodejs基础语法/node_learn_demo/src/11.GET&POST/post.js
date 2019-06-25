var http = require('http');
var querystring = require('querystring');

var post = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>Title</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '<form method="post">\n' +
    '    网站名: <input name="name" type="text">\n' +
    '    <hr>\n' +
    '    网站地址: <input name="url" type="text">\n' +
    '    <hr>\n' +
    '    <input type="submit">\n' +
    '</form>\n' +
    '</body>\n' +
    '</html>';

http.createServer(function (req, res) {
    var body = '';

    req.on('data', function (chunk) {
        body += chunk;
    })

    req.on('end', function () {
        // 参数解析
        body = querystring.parse(body);
        res.writeHead(200,{'Content-Type': 'text/html;charset=utf8'})
        if (body.name && body.url) {
            res.write('网站名 ' + body.name + '\n');
            res.write('网站名URL ' + body.url);
        }else {
            res.write(post)
        }
    })

}).listen(3000);