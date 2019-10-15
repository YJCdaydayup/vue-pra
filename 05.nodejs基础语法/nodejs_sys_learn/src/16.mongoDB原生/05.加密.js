'use strict'

// 真正的登录验证

const express = require('express');
const db = require('./model/db');
const ejs = require('ejs');
const session = require('express-session');

let app = express();


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}))
app.set('view engine', 'ejs');

app.get('/', (req, res, next)=> {
    if (req.session.login === 1) {
        res.send('你登录成功,用户名是: ', req.session.username);
    } else {
       res.send('您还未登录');
    }
});

app.get('/login', (req, res)=> {
    res.render('login');
});

app.get('/checklogin', (req, res)=> {
    let username = req.query.username;
    let password = req.query.password;
    // 根据用户填写的姓名去数据库找密码
    // 如果密码一样，则登录成功
    // 不一样就登录失败
    // 没有找到，用户名填写错了
    db.find('users', {username: username}, (err, result)=> {
        if (err) {
            throw err;
            return;
        }
        console.log(134)
        if (result.length === 0) {
            res.send('用户名错误');
            return;
        }
        let passowrd1 = result[0].password;
        if (password === passowrd1) {
            req.session.login = 1;
            req.session.username = username;
            res.send('登录success');
        } else {
            res.send('密码错误,登录失败')
        }
    })
});

app.listen(3000);