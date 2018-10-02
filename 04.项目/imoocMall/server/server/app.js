var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var users = require('./routes/users');
var goods = require('./routes/goods');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// 导入ejs模块
var ejs = require('ejs');
app.engine('.html',ejs.__express);

// app.set('view engine', 'jade');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 写在路由之前进行拦截
app.use(function (req, res, next) {
  // 这里就需要从req拿取
  if (req.cookies.userId) {
    next();// 不做拦截
  }else {
    // 这两个请求不拦截，设置白名单
    //  req.originalUrl 拿到的是路由和参数
    // 由于加入购物车的路由又重复，可以通过req.path拿取完整的路由 这里可以写:
    if (req.originalUrl == '/users/login' || req.originalUrl == '/users/logout' || req.path == '/goods/list') {
    // if (req.originalUrl == '/users/login' || req.originalUrl == '/users/logout' || /\/goods\/list/i.test(req.originalUrl)) {
      next();
    }else {
      res.json({
        status: "10001",
        msg: "当前未登录",
        result: ""
      });
    }
  }
});

app.use('/', indexRouter);
app.use('/users', users);
app.use('/goods', goods);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
