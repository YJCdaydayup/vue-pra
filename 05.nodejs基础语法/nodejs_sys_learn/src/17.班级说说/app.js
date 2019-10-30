'use strict'

const express = require('express');
const ejs = require('ejs');
const router = require('./router/router');
const session = require('express-session');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(session({
    secret: '123',
    resave: false,
    saveUninitialized: true
}));
app.use('/avatar',express.static('./avatar'));

// app.set('view engine','html');
// app.engine('html',ejs.__express);// ejs.__express 其实就是ejs的renderFile方法

app.get('/', router.showIndex);
app.get('/regist',router.showRegist);
app.post('/doregist',router.doregist);
app.get('/login',router.showlogin);
app.post('/dologin',router.dologin);
app.get('/setavatar',router.setavatar);
app.post('/dosetavatar',router.dosetavatar);
app.get('/cut',router.showcut);
app.get('/docut',router.docut);
app.post('/post',router.dopost);
app.get('/username/:username',router.showusershuoshuo);
app.get('/existlogin',router.existlogin);
app.get('/getAllPages',router.getAllPages);
app.get('/getList',router.getList);
app.get('/users',router.showusers);

app.listen(3000);
