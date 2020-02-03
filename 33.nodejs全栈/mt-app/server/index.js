import Koa from 'koa'
import consola from 'consola'
// const consola = require('consola')
import {Nuxt, Builder} from 'nuxt'
// const { Nuxt, Builder } = require('nuxt')

import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
// 处理返回的json数据美观json的
import json from 'koa-json'
import dbConfig from './dbs/config'
import passport from './interface/utils/passport'
import users from './interface/users'
import geo from './interface/geo'
import mongoose from 'mongoose'


const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // 1.配置session
  app.keys = ['mt', 'keyskeys']
  app.proxy = true;
  app.use(session({
    key: 'mt',
    prefix: 'mt: uid',
    store: new Redis()
  }))

  // 2.配置post请求
  app.use(bodyParser({
    extendTypes: ['json','form', 'text']
  }))

  app.use(json())

  // 3.连接数据库
  mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
  })

  // 4.处理登录相关
  app.use(passport.initialize())
  app.use(passport.session())


  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // 5.添加路由
  app.use(users.routes()).use(users.allowedMethods())
  app.use(geo.routes()).use(geo.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
