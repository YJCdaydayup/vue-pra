/**
 * Created by yangli on 2018/9/24.
 */

// 拿到express的路由
var express = require('express');
var router = express.Router();

// 引入monggose和对应的商品模型文件
var mongoose = require('mongoose');
var Goods = require('./../models/goods');

// 连接数据数据库(mongoose自带连接数据库的驱动)
// 写法固定，mongodb的固定端口是27017 后面跟数据库名:db_demo
// mongoose.connect('mongodb://root@127.0.0.1:27017/db_demo');
mongoose.connect('mongodb://127.0.0.1:27017/db_demo');

// 监听连接成功
mongoose.connection.on("connected",function () {
  console.log("MongoDb connected success");
});

// 监听连接失败
mongoose.connection.on("error",function () {
  console.log("MongoDb connected failed");
});


// 监听未连接
mongoose.connection.on("disconnected",function () {
  console.log("MongoDb connected disconnected");
});


// 实现路由
router.get('/',function (request, response, next) {
  // request.header('Access-Control-Allow-Origin:*');//允许所有来源访问
  // request.header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
  // response.send("Hello goods list ...");
  // 在这里写业务代码
  // 第一个是查找的条件，第二个是查到的内容
  Goods.find({}, (err, doc) => {
    // res.json 就是返回一个json对象
    if (err) {
      // 报错 就输出一个json对象出去
      response.json({
        status: "1",
        msg: err.message
      })
    }else {
      response.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,// 总条数
          list: doc // 查出来的文档集合
        }
      });
    }
  });


});


// 一定要输出, 不输出外面是拿不到的
module.exports = router;






