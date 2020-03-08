/**
 * Created by yangli on 2020/3/1.
 */

'use strict'

const express = require('express')

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

app.get('/', (req, res, next)=>{
    res.body += `<p style="color: red">${tab(12)}Koa 核心 处理业务</p>`
    res.send(res.body)
})

app.listen(3001)

