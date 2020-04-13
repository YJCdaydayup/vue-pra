const koa = require('koa')
const userRouter = require('./routers/user')

let app = new koa()


koa.use(userRouter.routes()).use(userRouter.allowRoute())