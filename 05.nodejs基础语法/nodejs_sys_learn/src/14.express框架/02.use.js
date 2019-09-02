'use strict'

const express = require('express');

let app = express();

// app.use('/',function (req, res) {
//   console.log(new Date());
// })

// 给了我们增加一些特定功能的便利场所
// app.use(function (req, res) {
//   let filePath = req.originalUrl;
//   fs.readFile('./public' + filePath, function (err, data) {
//     if (err) {
//       // 文件不存在
//       next();
//     } else {
//       res.send(data.toString());
//     }
//   })
// });

// 这个回调函数用第三方的函数来写就是:匹配上了就不next了，没有匹配上就next();
// 这个最好写在上面，找不到就执行下面匹配的路由
// 前端部署没有开发量
app.use(express.static('./public'));

// 扩展，就是/jingtai路由就找public下的资源
app.use('/jingtai',express.static('./public'));

app.get('/',function (req, res) {
  res.send('haha');
})

app.get('/admin',function (req, res) {
  res.send('管理员');
})

// app.use('/admin', (req, res)=> {
//   // res.send('你好');
//   res.write(req.originalUrl+'\n');
//   res.write(req.baseUrl+'\n');
//   res.write(req.path+'\n');
//   res.end();
// })


// 最后都找不到就全部执行这里
// app.use(function (req, res) {
//     res.send('没有这个页面');
// })


app.listen(3000);
