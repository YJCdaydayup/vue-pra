'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.use(express.static('./public'));
app.set('view engine','ejs');
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/',(req, res)=>{
    res.render('index',{
        title: '我是标题'
    })
});

app.post('/doPost',(req, res)=>{
    console.log(req.body);
    req.on('data',(data)=>{
        console.log(data);
        // 将data写入本地
        fs.writeFile('./index.txt', data, (err) => {
            if (err) {
                throw err;
            }
            console.log('写入模块成功');
        });
    })

    req.on('end',(end)=>{
        console.log('结束')
        return false;
    })

    res.send('请求收到了');
});


app.listen(3000);