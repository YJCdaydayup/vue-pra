/**
 * Created by yangli on 2019/8/29.
 */

// 1.路由能力
// 2.静态文件处理能力
// 3.模版引擎配合

'use strict'

const express = require('express');

let app = express();

app.get('/', (req, res)=> {
    res.send('你好');
})

app.get('/haha', (req, res)=> {
    res.send('这是haha页面');
})

app.get(/^\/student\/([\d]{10})$/, (req, res)=> {
    console.log(req)
    res.send('学生信息:学号:' + req.params[0]);
})

app.get('/teacher/:gonghap',(req, res)=>{
    res.send('老师信息,工号: ' + req.params.gonghao);
})

app.listen(3000);