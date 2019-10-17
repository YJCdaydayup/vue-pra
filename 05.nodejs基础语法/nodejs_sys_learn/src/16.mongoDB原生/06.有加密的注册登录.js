/**
 * Created by yangli on 2019/10/16.
 */
'use strict'

const express = require('express');
const form = require('formidable');
const db = require('./model/db');
const md5 = require('./model/md5');
const session = require('express-session');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true
}))
app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/doregister', (req, res) => {
    let formidable = new form.IncomingForm();
    formidable.parse(req, function (err, fileds, files) {
        // 同步的啊
        let mima = md5(md5(fileds.mima).substr(4, 7) + md5(fileds.mima));
        db.insertOne('users', {
            username: fileds.dengluming,
            password: mima
        }, (err, result) => {
            res.json({
                status: 0,
                result
            })
        })
    })
});

app.get('/login', (req, res) => {
    res.render('nlogin')
});

app.post('/dologin', (req, res) => {
    let formidable = new form.IncomingForm();
    formidable.parse(req, function (err, fileds, files) {
        // 同步的啊
        let mima = md5(md5(fileds.mima).substr(4, 7) + md5(fileds.mima));
        db.find('users', {
            username: fileds.dengluming,
        }, (err, result) => {
            if (err) {
                res.json({
                    status: 1,
                    msg: '系统错误'
                });
            } else {
                if (result.length === 0) {
                    res.json({
                        status: 2,
                        msg: '用户名错误'
                    })
                }
                if (result[0].password == mima) {
                    req.session.login = 1;
                    req.session.username = fileds.dengluming;
                    req.session.password = mima;
                    res.json({
                        status: 0,
                        msg: '登录成功'
                    })
                } else {
                    res.json({
                        status: 3,
                        msg: '密码错误'
                    })
                }
            }
        })
    })
});

app.get('/', (req, res) => {
   let username = req.session.username;
   if (req.session.login === 1) {
       res.send('用户名是: ' + username);
   }else {
       res.send('请先登录');
   }
});

app.listen(3000);