'use strict'

const Koa = require('koa')
const views = require('koa-views')
const session = require('koa-session')
const path = require('path')
const koaBody = require('koa-body')
const serve = require('koa-static')
const socketio = require('socket.io')

const router = require('./router/index')

global.sessionStorage = {}

let app = new Koa()

const server = require('http').Server(app.callback())
let io = socketio(server)

io.on('connection', (socket) => {
    console.log('连接成功')
    socket.on('connect-id', (id) => {
        console.log('收到客户端发来的id：', id)
        global.sessionStorage[id].sessionId = socket.id
        // 广播发送在线人数信息
        io.sockets.emit("online-info", global.sessionStorage);
        // socket.broadcast.emit("online-info",global.sessionStorage);
    })
})

app.on('error', async (err, ctx)=>{
    console.log(err)
})

app.keys = ['some secret hurr'];

const CONFIG = {
    key: 'koa:sess',
    httpOnly: true,
    signed: true,
    rolling: false
}

app.use(async (ctx, next)=>{
    try {
        await next()
    }catch(err) {
        ctx.render('err')
    }
})

app.use(serve(path.resolve('./public')));

app.use(session(CONFIG, app));

app.use(koaBody())

app.use(views(path.resolve('./views'), {extension: 'ejs'}))

app.use(router.routes()).use(router.allowedMethods())

app.use(async (ctx) => {
    await ctx.render('err')
})

server.listen(3000)
