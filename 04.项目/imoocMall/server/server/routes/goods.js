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


// 实现路由, get请求
router.get('/list',function (request, response, next) {


  // 获取排序参数(获取前端传过来的参数param直接获取),page pageSize 都需要数字类型
  var page = parseInt(request.param('page'));
  var pageSize = parseInt(request.param('pageSize'));
  var sort = request.param('sort');

  // 添加价格范围
  var minPrice = parseInt(request.param('minPrice'));
  var maxPrice = parseInt(request.param('maxPrice'));

  // 查询的条件
  let params = {salePrice: { $gt: minPrice, $lt: maxPrice},};

  // find()方法是查找所有的数据，返回模型的
  // skip()用于分页的，跳过多少条数据
  // limit 每页条数
  let skip = (page - 1) * pageSize;
  let goodsModel = Goods.find(params).skip(skip).limit(pageSize);

  // sort()方法，第一个字段是排序字段，sort: 1 升序 -1 降序
  goodsModel.sort({"salePrice": sort});

  // exec() 前面的链式语法依然返回goodModel对象
  // 由于前面的参数和条件都设置了，这里直接使用exec()不带参数，获取数据
  goodsModel.exec((err, doc) => {

  // request.header('Access-Control-Allow-Origin:*');//允许所有来源访问
  // request.header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
  // response.send("Hello goods list ...");
  // 在这里写业务代码
  // 第一个是查找的条件，第二个是查到的内容
  // Goods.find({}, (err, doc) => {
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


// 加入购物车接口(提交数据用post)
router.post("/addCart",function (req,res,next) {
  // 这里默认此用户登陆了,post请求需要从body里面拿参数
  var userId = '100000077',
    productId = req.body.productId;
  var User = require('../models/user');
  User.findOne({
    userId: userId
  },function (err, userDoc) {
    if (err)  {
      res.json({
        status: '1',
        msg: err.message
      });
    }else {
      if (userDoc) {

        let goodsItem = null;
        // 先去遍历用户购物车里面有没有这个产品
        userDoc.cartList.forEach(function (item,index) {
          if (item.productId == productId) {
            goodsItem = item;
            item.productNum ++;
          }
        });

        if (goodsItem) {
          // 如果有这个商品
          userDoc.save(function (err2, doc2) {
            if (err2) {
              res.json({
                status: '1',
                msg: err.message
              });
            }else {
              res.json({
                status: '0',
                msg: '',
                result: 'success'
              });
            }
          });
        }else {
          // 如果没有这个商品
          Goods.findOne({
            productId: productId
          },(err, goodDoc)=>{
            if (err) {
              res.json({
                status: '1',
                msg: err.message
              });
            }else {
              if (goodDoc) {
                goodDoc.productNum = 1;
                goodDoc.checked = 1;
                userDoc.cartList.push(goodDoc);
                userDoc.save(function (err2, doc2) {
                  if (err2) {
                    res.json({
                      status: '1',
                      msg: err.message
                    });
                  }else {
                    res.json({
                      status: '0',
                      msg: '',
                      result: 'success'
                    });
                  }
                })
              }
            }
          });
        }
      }
    }
  });
});


// 一定要输出, 不输出外面是拿不到的
module.exports = router;






