var express = require('express');
var router = express.Router();

/* GET users listing. */
// 这个users.js就是一级路由页面， 一级路由都是'/'
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 定义二级路由就是在一级路由页面里面定义的
router.get('/test/index.html', function(req, res, next) {
  res.render('test/index', { title: 'Express Very Good' });
});

module.exports = router;
