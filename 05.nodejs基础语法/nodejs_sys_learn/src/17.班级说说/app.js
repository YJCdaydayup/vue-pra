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

app.get('/', router.showIndex);
app.get('/regist',router.showRegist);
app.post('/doregist',router.doregist);
app.get('/login',router.showlogin);
app.post('/dologin',router.dologin);
app.get('/setavatar',router.setavatar);
app.post('/dosetavatar',router.dosetavatar);
app.get('/cut',router.showcut);
app.get('/docut',router.docut);

app.listen(3000);
