'use strict'

const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const convert = require('koa-convert')
const router = require('./router/index')

let tab = (n) => new Array(n).join('&nbsp;')


let mid1 = () => {
    return  async (ctx, next) => {
        ctx.body = '<h3>请求 => 第一层中间件</h3>'
        await next()
        ctx.body += '<h3>响应 <= 第一层中间件</h3>'
    }
}

let mid2 = () => {
    return async (ctx, next) => {
        ctx.body += `<h3>${tab(4)}请求 => 第二层中间件</h3>`
        await next()
        ctx.body += `<h3>${tab(4)}响应 <= 第二层中间件</h3>`
    }
}

// 箭头函数的简化
let mid3 = () => async (ctx, next)=> {
        ctx.body += `<h3>${tab(8)}请求 => 第三层中间件</h3>`
        await next()
        ctx.body += `<h3>${tab(8)}响应 <= 第三层中间件</h3>`
    }

app.use(convert(logger()))
app.use(mid1())
app.use(mid2())
app.use(mid3())

app.use(router.routes()).use(router.allowedMethods())

app.use(async (ctx, next) => {
    ctx.body += `<p style="color: red">${tab(12)}Koa 核心 处理业务</p>`
})

app.listen(3001)
