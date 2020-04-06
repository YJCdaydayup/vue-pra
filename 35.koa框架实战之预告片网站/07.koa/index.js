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
    socket.on('connect-id', (msgObj) => {
        let id = msgObj.id
        let username = msgObj.username
        console.log(username + '登录成功')
        console.log(`收到客户${username}发来的id:${id}`)
        if (!global.sessionStorage[id]) {
            global.sessionStorage[id] = {}
        }
        global.sessionStorage[id].socketId = socket.id
        // 广播发送在线人数信息
        io.sockets.emit("online-info", global.sessionStorage);
    })

    // 接收到客户端的群聊消息后广播出去
    socket.on('msg_to_all', (msg)=> {
        io.sockets.emit('transfer_to_all', msg)
    })

    // 收到客户端退出的消息
    socket.on('disconnect', function () {
        let keys = Object.keys(global.sessionStorage)
        let username
        let matchId
        for (let i = keys.length; i--;) {
            let id = keys[i]
            if (global.sessionStorage[id].socketId == socket.id) {
                matchId = id
                username = global.sessionStorage[id].username
                break
            }
        }
        console.log(`${username}下线了`)
        io.sockets.emit("offline-info", {
            onliners: global.sessionStorage,
            offline_id: matchId,
            offline_name: username
        });
    })

    // 向指定的客户发送消息
    socket.on('private_chat', (obj)=> {
        console.log(obj)
        let socketId = global.sessionStorage[obj.id].socketId
        if (io.sockets.connected[socketId]) {
            console.log('开始发送私聊的消息给' + global.sessionStorage[obj.id].username)
            // io.sockets.connected[socketId].emit('private_chat_back', obj.msg);
            io.to(socketId).emit('private_chat_back', {
                msg: obj.msg,
                fromUser: obj.fromUser
            })
            io.to(socket.id).emit('private_chat_back', {
                msg: obj.msg,
                fromUser: obj.fromUser
            })
        }
    })

    // 男生聊天组
    socket.on('boy_group', (data) => {
        console.log(`${global.sessionStorage[data.id].username}加入男生聊天组`)
        socket.join('boy_group')
    })

    // 女生聊天组
    socket.on('girl_group', (data)=>{
        console.log(`${global.sessionStorage[data.id].username}加入女生聊天组`)
        socket.join('girl_group')
    });

    // 收到组消息
    socket.on('send_group_message', (msgObj)=>{
        console.log(`收到组消息${msgObj}`)
        let group
        let keys = Object.keys(socket.rooms)
        let names = keys.filter((item)=>{
            return item.indexOf('group') > -1
        })
        if (names && names.length > 0) {
            group = names[0]
        }
        io.sockets.in(group).emit('send_group_back', msgObj);
    })
})

app.on('error', async(err, ctx)=> {
    console.log(err)
})

app.keys = ['some secret hurr'];

const CONFIG = {
    key: 'koa:sess',
    httpOnly: true,
    signed: true,
    rolling: false
}

app.use(async(ctx, next)=> {
    try {
        await next()
    } catch (err) {
        ctx.render('err')
    }
})

app.use(serve(path.resolve('./public')));

app.use(session(CONFIG, app));

app.use(koaBody())

app.use(views(path.resolve('./views'), {extension: 'ejs'}))

app.use(router.routes()).use(router.allowedMethods())

app.use(async(ctx) => {
    await ctx.render('err')
})

server.listen(3000)
