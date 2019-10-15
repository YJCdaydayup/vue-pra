/**
 * Created by yangli on 2019/10/14.
 */
'use strict'

const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

let app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));

app.use(cookieParser());

app.get('/login', (req, res)=> {

    req.session.login = '1';
    req.session.userName = 'Sara';
    req.session.cookie.expires = new Date(Date.now() + 100000);
    req.session.cookie.maxAge = 100000;
    res.send('你已经登录成功')
})

app.get('/', (req, res, next)=> {
    if (req.session.login) {
        res.send('你已经成功登录' + req.session.userName);
    }else {
        res.send('你还没登录');
    }
});

// app.get('/', (req, res)=> {
//     // 这个是设置name，后面的对象是设置cookie的属性
//     res.cookie('xihao', 'tfboys', {
//         maxAge: 60000, httpOnly: true
//     })
//     res.send(req.cookies);
// });

app.get('/gonglue', (req, res)=> {
    let mudidi = req.query.mudidi;
    let xihaos = req.cookies.mudidi || [];
    xihaos.push(mudidi);
    res.cookie('mudidi', xihaos);
    res.send(mudidi + '旅游攻略')
})

app.listen(3000);