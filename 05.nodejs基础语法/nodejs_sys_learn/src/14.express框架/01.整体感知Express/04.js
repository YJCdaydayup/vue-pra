
/**
 * Created by yangli on 2019/9/1.
 */


const http = require('http');

// 此变量服务的生命周期内一直在
var a = 100;

let server = http.createServer(function (req, res) {
    // 每次请求都只执行这里的语句
    a ++;
    res.end(a.toString());
});

server.listen(3000);