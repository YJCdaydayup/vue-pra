'use strict'

const koa = require('koa2')
const logger = require('koa-logger')
const session = require('koa-session')

let app = new koa()

// const mid1 = async (ctx, next) => {
//     ctx.type = 'text/html;charset=utf-8'
//     await next()
//     ctx.body = ctx.body + ' YES I AM HETE'
// }
//
// const mid2 = async (ctx, next) => {
//     ctx.body = 'Hi '
//     await next()
//     ctx.body += ' 我是中间件2'
// }
//
// const mid3 = async (ctx, next) => {
//     ctx.body = ctx.body + 'Sara'
//     ctx.body += '我是中间件3'
//     // await next()
// }

//
// function tail(i) {
//     if (i > 3) {
//         return false
//     }
//     console.log('xiugaiqian ', i)
//     tail(i + 1)
//     console.log('xiugaihou ', i)
// }

// function tail(i) {
//     if (i > 3) {
//         return false
//     }
//     console.log('xiugaiqian ', i)
//     return tail(i + 1)
// }

// tail(0)

// (function tailing(k) {
//     if (k > 3) {
//         return false
//     }
//     console.log('xiugaiqian1 ', k)
//     tailing( k + 1)
//     console.log('xiugaihou1 ', k)
//
// })(0)

app.keys = ['jia mi']

app.use(logger())
app.use(session(app))
// app.use(mid1)
// app.use(mid2)
// app.use(mid3)

// app.use(async (ctx, next) => {
//     if (ctx.path === '/favicon.ico') return
//     let count = ctx.session.views || 0
//     ++ count
//     ctx.session.views = count
//     ctx.body = ctx.session.views + '次'
// })

app.use(async (ctx, next)=>{
    //
    if (ctx.path === '/') {

    }else if (ctx.path === '/hi') {

    }


})

app.listen(2333)