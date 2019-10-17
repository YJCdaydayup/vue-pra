'use strict'

const express = require('express');
const db = require('./model/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const ejs = require('ejs');
const formidable = require('formidable');
const bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static('./public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}))

app.get('/',(req, res)=>{
    res.render('SUI_Modile');
})

app.get('/router2',(req, res)=>{
    res.render('router2');
})

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/checklogin', (req, res) => {
    console.log(123)
    req.on("data",function (data) {
        console.log(data.toString());

        res.send(data);
    })
})
// let form = new formidable.IncomingForm();
// form.parse(req, function (err, fields, files) {
//     let password = fields.password;
//     db.find('users', {username: fields.username}, (err, result) => {
//         if (err) {
//             res.json({
//                 status: 1,
//                 msg: '系统错误',
//                 data: {}
//             });
//         } else {
//             if (result.length === 0) {
//                 res.json({
//                     status: 0,
//                     msg: '用户名错误',
//                     data: {}
//                 })
//             } else {
//                 let psw = result[0].password;
//                 if (psw == password) {
//                     req.session.login = 1;
//                     req.session.username = fields.username;
//                     res.json({
//                         status: 0,
//                         msg: '登录成功,用户名是: ' + fields.username
//                     })
//                 } else {
//                     res.json({
//                         status: 0,
//                         msg: '密码错误，请重新输入'
//                     })
//                 }
//             }
//         }
//
//     })
// });
// })


app.get('/username', (req, res) => {
    console.log(122)
    if (req.session.login == 1) {
        res.send(req.session.username);
    } else {
        res.send('您还未登录，请先登录');
    }
});

app.listen(3000);