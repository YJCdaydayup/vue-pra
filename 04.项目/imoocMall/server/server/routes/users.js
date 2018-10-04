var express = require('express');
var router = express.Router();
var User = require('./../models/user');


/* GET users listing. */
// 这个users.js就是一级路由页面， 一级路由都是'/'
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 定义二级路由就是在一级路由页面里面定义的
// router.get('/test/index.html', function(req, res, next) {
//   res.render('test/index', { title: 'Express Very Good' });
// });

// 1.登录接口 找到用户的路由
router.post('/login',function (req,  res, next) {
  let param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  };

  // 进都没进来，可能是数据库原因或者数据库找不到对应数据
  User.findOne(param, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    }else {
      if (doc) {
        // 1.写cookie到某个地方,保存在前端去了
        res.cookie('userId',doc.userId,{
          path: "/", // cookie放在根目录下
          maxAge: 1000*60*60
        });

        // 2.保存用户名到cookie里面
        res.cookie('userName',doc.userName,{
          path: '/',
          maxAge: 1000*60*60
        });

        // 2.也可以服务端将用户的信息存储在session里面，随时可以拿取
        // req.session.user = doc;

        res.json({
          status: "0",
          msg: "",
          result: {
            userName: doc.userName,
          }
        })
      }
    }
  });
});

// 2.登出请求
router.post("/logout",function (req, res, next) {
  // 清理cookie
  res.cookie('userId','',{
    path: '/',
    maxAge: -1 // -1就是直接让cookie失效
  });
  res.cookie('userName','',{
    path: '/',
    maxAge: -1
  });
  res.json({
    status: "0",
    msg: "",
    result: ""
  });
});

// 3.登录校验
router.get('/checkLogin',function (req, res, next) {
  if (req.cookies.userId) {
    res.json({
      status: "0",
      msg: "已登录",
      result: {
        userName: req.cookies.userName
      }
    })
  }else {
    res.json({
      status: '1',
      msg: "未登录",
      result: ''
    });
  }
});

// 4.购物车列表
router.get('/cartList',function (req, res, next) {
  let userId = req.cookies.userId;
  console.log(userId);
  User.findOne({userId: userId},function (err, doc) {
    console.log(userId);
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else {
      res.json({
        status: '0',
        msg: '',
        result: doc.cartList
      });
    }
  });
});

// 5.购物车删除
router.post('/cartDel',function (req, res, next) {
  let userId = req.cookies.userId,
    productId = req.body.productId;
  User.update(
    {userId: userId},
    {
      $pull:
      {'cartList':
        {productId: productId}
      }
    },function (err, doc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message,
          result: ""
        })
      }else {
        res.json({
          status: "0",
          msg: "",
          result: "succuss"
        });
      }
    });
});

// 6.购物车修改（更新子文档）
router.post('/cartEdit',function (req, res, next) {
  let userId = req.cookies.userId,
    productId = req.body.productId,
    productNum = req.body.productNum,
    checked = req.body.checked;
  User.update({userId: userId,"cartList.productId": productId},{
    "cartList.$.productNum": productNum,
    "cartList.$.checked": checked
  },function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ""
      })
    }else {
      res.json({
        status: "0",
        msg: "",
        result: "succuss"
      })
    }
  });
});

// 7.全选/取消全选
router.post("/editCheckAll",function (req, res, next) {
  let userId = req.cookies.userId,
    checkAll = req.body.checkAll;
  User.findOne({userId: userId}, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ""
      })
    }else {
     let cartList = doc.cartList;
      cartList.forEach((item) => {
        item.checked = checkAll? '1': '0';
      });
      doc.save(function (err, doc2) {
        if (err) {
          res.json({
            status: "1",
            msg: err.message,
            result: ""
          })
        }else {
          res.json({
            status: "0",
            msg: "",
            result: "succuss"
          })
        }
      });
    }
  });
});

// 8.查询用户地址
router.get("/addressList",function (req, res, next) {
  let userId = req.cookies.userId;
  User.findOne({userId: userId},function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else {
      console.log(doc);
      if (doc) {
        res.json({
          status: "0",
          msg: "",
          result: {
            list: doc.addressList
          }
        });
      }
    }
  });
});


module.exports = router;
