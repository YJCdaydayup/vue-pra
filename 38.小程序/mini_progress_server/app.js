'use strict'

import Koa from 'koa'
import serve from 'koa-static'
import logger from 'koa-logger'
import miniProgromRouter from './routers/miniProgrom'

const app = new Koa()
app.use(logger())
app.use(serve('./public'))

app.use(miniProgromRouter.routes())
app.use(miniProgromRouter.allowedMethods())

app.listen(3000)