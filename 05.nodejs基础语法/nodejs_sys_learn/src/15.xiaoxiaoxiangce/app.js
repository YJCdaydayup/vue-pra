'use strict'

const express = require('express');
const router = require('./controller');

let app = express();

app.set('view engine', 'ejs');

// 路由中间件
app.use(express.static('./public'));
app.use(express.static('./uploads')); // 为了获取图片，将uploads文件夹静态出来

app.get('/', router.showIndex);

app.get("/:albumName", router.showAlbum);

app.get('/upload',router.uploader);

app.post('/doPost',router.doPost);

// 最后的中间件 404
app.use((req, res)=> {
    res.render('err');
})

app.listen(3000);
