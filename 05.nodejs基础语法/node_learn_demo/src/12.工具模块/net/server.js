var net = require('net');
var server = net.createServer(function (connection) {
    console.log('client connected');
    connection.on('end', function () {
        console.log('客户端关闭连接');
    });

    var fnArr = function (arr, count) {
        var obj, timer;

        function stop() {
            console.log('结束打印！！！');
            clearInterval(timer);
            timer = null;
        }

        var logArr = function () {
            var str = '';
            for (var i = 0; i < count; i++) {
                if (arr.length === 0) {
                    stop();
                    break;
                } else {
                    var n = arr.shift();
                    str += n + ' ';
                }
            }
            connection.write(str);
        }

        return function () {
            timer = setInterval(function () {
                logArr();
            }, 2000);
        }
    }

    var arr = [];
    for (var i = 0; i < 20; i++) {
        arr.push(i);
    }

    fnArr(arr,6)();
    console.log('start')


    connection.pipe(connection);
});
server.listen(8080, function () {
    console.log('server is listening');
})