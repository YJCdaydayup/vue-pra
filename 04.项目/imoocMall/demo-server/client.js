/**
 * Created by yangli on 2018/9/22.
 */

// nodejs作为客户端调用第三方接口
let http = require('http');

// let util = require('util');

var querystring = require('querystring');

var contents = querystring.stringify({
  "functionId": "login",
  "parameters": {
    "userId": "2929",
    "password": "ISGMyneATSuhkiwz4BURBQ==",
    "phoneNo": "13751135038"
  }
});

var options = {
  host: 'http://172.23.1.196:8080',
  path: '/zzb/system/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic o5CZ976uIOA6l7dUl5KtoWggYYi4+v3VvRC7JtDby/I ='
  }
}


var req = http.request(options, function (res) {
  res.setEncoding('utf8');
  res.on('data', function (data) {
    console.log("data:", data); //一段html代码
  });
});

req.write(contents);
req.end;

// http.get('http://www.imooc.com/u/card',function (res) {
//   var data = '';

//   // 监听数据,不能一次性拿到数据
//   res.on("data",function (chunk) {
//     data += chunk;
//   });

//   res.on("end",function () {
//     if (data) {
//       // 这个data不是JSON对象
//       try {
//         var string = util.inspect(JSON.parse(data));
//         console.log("result:" + string);
//       }catch(e) {
//         console.log("data不是标准的json对象")
//       }
//     }
//   })
// });
