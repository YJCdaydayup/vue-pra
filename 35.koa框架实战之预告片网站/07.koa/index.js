'use strict'

const Koa = require('koa')
const views = require('koa-views')
const session = require('koa-session')
const path = require('path')
const koaBody = require('koa-body')

const router = require('./router/index')

let app = new Koa()

app.keys = ['some secret hurr'];

const CONFIG = {
    key: 'koa:sess',
    httpOnly: true,
    signed: true,
    rolling: false
}

app.use(session(CONFIG, app));

app.use(koaBody())

app.use(views(path.resolve('./views'), {extension: 'ejs'}))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)