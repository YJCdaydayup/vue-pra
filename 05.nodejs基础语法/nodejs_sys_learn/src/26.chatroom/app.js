'use strict'


const express = require('express');
const session = require('express-session');
let app = express();

let http = require('http').Server(app);
let io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.use(session({
  secret: 'key',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static('./public'));

let alluser = [];

// 中间件
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/check', function (req, res) {
  if (!req.query.username) {
    res.send('必须填写用户名');
    return;
  }
  if (alluser.indexOf(req.query.username) > -1) {
    res.send('用户名被占用');
    return;
  }
  alluser.push(req.query.username);
  req.session.username = req.query.username;
  res.redirect('/chat');
});

app.get('/chat', function (req, res) {
  if (!req.session.username) {
    // res.send('必须先登录才可以进聊天室');
    res.redirect('/')
    return;
  }
  res.render('chat', {
    username: req.session.username
  });
});

io.on('connection', (socket) => {
  socket.on('liaotian', (msgObj) => {
    console.log(msgObj)
    io.emit('huida', msgObj);
  });
});

// 监听还是http再监听
http.listen(3000);



