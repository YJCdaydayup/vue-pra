'use strict'

const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')

let tab = function (n) {
    return new Array(n).join('&nbsp;')
}

let mid1 = function () {
    return function *(next) {
        this.body = '<h3>请求 => 第一层中间件</h3>'
        yield next
        this.body += '<h3>响应 <= 第一层中间件</h3>'
    }
}

let mid2 = function () {
    return function *(next) {
        this.body += '<h3>' + tab(4) + '请求 => 第二层中间件</h3>'
        yield next
        this.body += '<h3>' + tab(4) + '响应 <= 第二层中间件</h3>'
    }
}

let mid3 = function () {
    return function *(next) {
        this.body += '<h3>' + tab(8) + '请求 => 第三层中间件</h3>'
        yield next
        this.body += '<h3>' + tab(8) + '响应 <= 第三层中间件</h3>'
    }
}

app.use(logger())
app.use(mid1())
app.use(mid2())
app.use(mid3())


app.use(function *(next) {
    this.body += '<p style="color: red">' + tab(12) +'Koa 核心 处理业务</p>'
})


app.listen(2333)
