const Router = require('koa-router')
const cryptoJS = require('crypto-js')

let router = new Router({
    prefix: ''
})

router.get('/', async (ctx, next)=>{
    let id = ctx.query.id
    let username = ctx.query.username
    if (!username || !id) {
        return ctx.redirect('/login')
    }
    if (!global.sessionStorage[id]) {
        global.sessionStorage[id] = {}
    }
    global.sessionStorage[id].username = username
    await ctx.render('index', {
        username: username,
        online: Object.keys(global.sessionStorage).length,
        id,
        onliner: global.sessionStorage
    })
})

router.get('/login', async (ctx, next) => {
    await ctx.render('login')
})

router.post('/doLogin', async (ctx, next) => {
    let username = ctx.request.body.username
    if (ctx.session.username && ctx.session.username == this.username) {
        return ctx.body = {
          code: 0,
          id: ctx.session.id
        }
    }
    let id = Math.floor(Math.random() * 10000000).toString(16)
    id = cryptoJS.MD5(id).toString()
    ctx.session.username = username
    ctx.session.id = id
    ctx.body = {
        code: 0,
        id
    }
})

module.exports = router
