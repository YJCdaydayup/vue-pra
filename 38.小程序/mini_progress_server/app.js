'use strict'

import Koa from 'koa'
import http from 'http'
import WebSocket from 'ws'
import serve from 'koa-static'
import logger from 'koa-logger'
import miniProgromRouter from './routers/miniProgrom'
import miniApiRouter from './routers/mini_api'
import miniJobRouter from './routers/mini_job'
import koaBody from 'koa-body'
import {
  initSchemas,
  connect
} from './dbs/init'


 function start() {
    const app = new Koa()
    app.use(logger())
    app.use(serve('./public'))
    app.use(koaBody())

    app.use(miniProgromRouter.routes())
    app.use(miniProgromRouter.allowedMethods())
    app.use(miniApiRouter.routes())
    app.use(miniApiRouter.allowedMethods())
    app.use(miniJobRouter.routes())
    app.use(miniJobRouter.allowedMethods())

    const server = http.createServer(app.callback())
    const wss = new WebSocket.Server({
        server
    })
    global.userList = []
    global.sessionList = []
    wss.on('connection', (ws) => {
    console.log('连接成功！！！')
    ws.on('message', async (msg) => {
        console.log(`收到消息: ${msg}`)
    })

    Array.from(wss.clients)[0].send(`————————————————
    版权声明：本文为CSDN博主「天一QAQ」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    原文链接：https://blog.csdn.net/qq_42783610/java/article/details/85233382`)
    ws.on('close', () => {
        console.log('断开连接...')
        wss.clients.forEach(function each(client) {
        client.send(JSON.stringify({

        }))
        })
    })
    })
    server.listen(3001)
}

;(async ()=>{
    await connect()
    initSchemas()
    await start()
})()
