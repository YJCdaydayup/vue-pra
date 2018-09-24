/**
 * Created by yangli on 2018/9/22.
 */

// nodejs作为客户端调用第三方接口
let http = require('http');

let util = require('util');

http.get('http://www.imooc.com/u/card',function (res) {
  var data = '';

  // 监听数据,不能一次性拿到数据
  res.on("data",function (chunk) {
    data += chunk;
  });

  res.on("end",function () {
    if (data) {
      // 这个data不是JSON对象
      try {
        var string = util.inspect(JSON.parse(data));
        console.log("result:" + string);
      }catch(e) {
        console.log("data不是标准的json对象")
      }
    }
  })
});
