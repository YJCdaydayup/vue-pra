'use strict'

const http = require('http');

// 创建服务器的实例,创建的是http.Server这个对象
const server = http.createServer();

// 监听request事件, 当有请求发送给这个server时就触发这个事件
// 回调里得到了，请求对象和响应对象
// http模块帮你做了封装，把请求报文封装到request对象里面
// 使用response里面的方法构造响应报文，然后将报文扔回去，只能扔一次，一次请求只对应一次响应
// response就是http.serverResponse对象 就是一个写文件流
// request就是http.IncommingMessgae对象
server.on('request', function (request, response) {
    // 1./favicon.ico会多出一个请求来请求小图标，所以请求是两个,postman请求就没有，只有浏览器请求才有
    // console.log(request.headers)
    console.log(request.httpVersion);
    console.log(request.method);
    console.log(request.url)

    // 2.什么参数都没有默认路径就是/,真正的路由就在这里这样写
    if (request.url === '/login' && request.method === 'GET') {
        response.end('<div>news</div>')
    }else {
        response.end('<div>login</div>')
    }


    // 写报文头
    // 第一个状态码
    // 第二个是写入的内容的格式类型，浏览器解析不了就会下载下来,如svg图片，png图片
    // 报文头必须在前面写，一旦有报文扔出去再扔头，报文乱掉了，浏览器解析不了了
    // response.writeHead(200,{
    //     'Content-Type': 'text/html;charset=utf-8',
    // })
    //
    // // 向响应报文的报文体写内容
    // response.write('hello');
    // response.write('<h1>123</h1>')
    // // 这也说明了报文是一块一块的传递到客户端的
    // // 结束,end()必须放在最后面，代表报文已经扔回去了
    // // end('world')也可以传递参数
    // // end就只能写一次
    // response.end();
});

// node默认式3000端口，java默认8080
server.listen(3000);



