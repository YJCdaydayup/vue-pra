var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // 传递route进来
        route(pathname);

        response.writeHead(200,{'Content-Type': 'text/plain'});
        response.write('hello world');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('服务器开启了...');
}

exports.start = start;