'use strict'

const Koa = require('koa')
const views = require('koa-views')
const session = require('koa-session')
const path = require('path')
const koaBody = require('koa-body')
const serve = require('koa-static')
const socketio = require('socket.io')
import Tool from './../tools/tool.js'
import User from '../dbs/schema/user.js'
import Message from './../dbs/schema/message'
import MsgInstance from './../dbs/schema/msg_instance'
import {
  init
} from './../dbs/init'

import router from './../router/index'

(async ()=>{
    await init()

    await Tool.loadInfoInSessionStorage()

    let app = new Koa()
    const server = require('http').Server(app.callback())
    let io = socketio(server)

    io.on('connection', async (socket) => {
     socket.on('connect-id', async (msgObj) => {
       let id = msgObj.id
       let username = msgObj.username
       console.log(username + '登录成功')
       console.log(`收到客户${username}发来的id:${id}`)
        await User.updateOne({uid: id}, {$set: {
            sessionId: socket.id
        }})
        global.sessionStorage[id].sessionId = socket.id
       // 广播发送在线人数信息
       console.log('返回数据', global.sessionStorage)
       io.sockets.emit("online-info", global.sessionStorage);
     })

     // 接收到客户端的群聊消息后广播出去
     socket.on('msg_to_all', async (msgObj) => {
        console.log('群消息msg', msgObj)
        io.sockets.emit('transfer_to_all', msgObj)
        let user = await User.findOne({
            sessionId: socket.id
        })
        let instance = new MsgInstance({
            type: 3,
            fromName: user.name,
            fromUid: user.uid,
            content: msgObj.msg,
            toName: '*',
            toUid: '*'
        })

        await Message.updateMany({}, {
            $push: {
                'group_msgs': instance
            }
        })
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
     socket.on('private_chat', async (obj) => {
       let msg_instance = new MsgInstance({
            type: 1,
            fromName: obj.from,
            fromUid: obj.fromId,
            content: obj.msg,
            toName: obj.to,
            toUid: obj.toId
       })

       let toMes = await Message.findOne({
           uid: obj.toId
       })

       if (!toMes) {
           await Message.create({
               uid: obj.toId
           })
       }

       await Message.updateOne({
           uid: obj.toId
       },{
           $push: {
               'section_msgs': msg_instance
           }
       })

        let socketId = global.sessionStorage[obj.toId]['sessionId']
        if (io.sockets.connected[socketId]) {
         console.log('开始发送私聊的消息给' + global.sessionStorage[obj.toId]['name'])
         io.to(socketId).emit('private_chat_back', {
           msg: obj.msg,
           from: obj.from
         })
       }
     })

     // 男生聊天组
     socket.on('boy_group', (data) => {
       console.log(`${global.sessionStorage[data.id].username}加入男生聊天组`)
       socket.join('boy_group')
     })

     // 女生聊天组
     socket.on('girl_group', (data) => {
       console.log(`${global.sessionStorage[data.id].username}加入女生聊天组`)
       socket.join('girl_group')
     });

     // 收到组消息
     socket.on('send_group_message', (msgObj) => {
       console.log(`收到组消息${msgObj}`)
       let group
       let keys = Object.keys(socket.rooms)
       let names = keys.filter((item) => {
         return item.indexOf('group') > -1
       })
       if (names && names.length > 0) {
           group = names[0]
        }
        io.sockets.in(group).emit('send_group_back', msgObj);
     })
   })

   app.on('error', async (err, ctx) => {
     console.log(err)
   })

   app.keys = ['some secret hurr'];

   const CONFIG = {
     key: 'koa:sess',
     httpOnly: true,
     signed: true,
     rolling: false
   }

   app.use(async (ctx, next) => {
     try {
       await next()
     } catch (err) {
       ctx.render('err')
     }
   })

   app.use(serve(path.resolve('./public')));

   app.use(session(CONFIG, app));

   app.use(koaBody())

   app.use(views(path.resolve('./views'), {
     extension: 'ejs'
   }))

   app.use(router.routes()).use(router.allowedMethods())

   app.use(async (ctx) => {
     await ctx.render('err')
   })

   server.listen(3000)

})()