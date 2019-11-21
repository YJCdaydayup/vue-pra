'use strict'

const express = require('express');

let app = express();

app.use(express.static('./public'));

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin','http://localhost:63342')

    // .header('Access-Control-Allow-Origin', 'http://172.23.1.237:3000');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get('/api',(req, res)=>{
   res.json({
       status: 0,
       msg: '您还未登录，请先进行登录!',
       result: req.query
   });
});

app.listen(3000);