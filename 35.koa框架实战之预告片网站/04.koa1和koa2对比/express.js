/**
 * Created by yangli on 2020/3/1.
 */

'use strict'

const express = require('express')
const request = require('request-promise-native')
const fs = require('fs')
const bodyParser = require('body-parser')
const formidable = require('formidable')
const path = require('path')

let app = express()

const tab = (n) => new Array(n).join('&nbsp;')

let mid1 = () => {
    return (req, res, next) => {
        res.body = '<h3>请求 => 第一层中间件</h3>'
        next()
        res.body += '<h3>响应 <= 第一层中间件</h3>'
    }
}

let mid2 = () => {
    return (req, res, next) => {
        res.body += `<h3>${tab(4)}请求 => 第二层中间件</h3>`
        next()
        res.body += `<h3>${tab(4)}响应 <= 第二层中间件</h3>`
    }
}

// 箭头函数的简化
let mid3 = () => (req, res, next)=> {
    res.body += `<h3>${tab(8)}请求 => 第三层中间件</h3>`
    next()
    res.body += `<h3>${tab(8)}响应 <= 第三层中间件</h3>`
}

app.use(express.static('./public'))
app.use(mid1())
app.use(mid2())
app.use(mid3())

// parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }))
// app.use(bodyParser.urlencoded({
//     extended: true,
//     limit: '1000100000kb'
// }));
// app.use(bodyParser.json({ limit: '1000100000kb' }));  

// parse various different custom JSON types as JSON
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.get('/', (req, res, next)=>{
    res.body += `<p style="color: red">${tab(12)}Koa 核心 处理业务</p>`
    res.send(res.body)
})

app.post('/photo', (req, res, next)=>{
    const form = formidable({
      multiples: true,
      uploadDir: __dirname
    })
    form.parse(req, (err, fields, files) => {
      let imgPath = files.file.path
      let data = fs.readFileSync(imgPath)

      request({
        url: 'http://172.23.1.138:8088/icr/recognize_id_card?encoding=utf8&head_portrait=1&crop_image=1&recognize_mode=1',
        method: "POST",
        headers: {
          "content-type": "application/octet-stream",
        },
        body: data
      }, function (error, response) {
        fs.unlinkSync(imgPath) 

        try{
          JSON.parse(response.body)
        }catch(err) {
          res.send(({
            status: -1,
            msg: '请求数据失败',
            data: ''
          }))
          return false
        }

        if (error) {
          res.send(({
            status: -1,
            msg: '请求数据失败',
            data: ''
          }))
          return false
        }
          console.log(JSON.stringify({
            status: 0,
            msg: 'successed',
            data: response.body
          }))

        let res1 = JSON.parse(response.body)
        if (res1.type.length === 0) {
          res.send(({
            status: -1,
            msg: '请求数据失败',
            data: ''
          }))
          return false
        }
        res.send(({
          status: 0,
          msg: 'successed',
          data: JSON.parse(response.body)
        }))
      })
    });
})

app.listen(3001, '172.23.1.220')