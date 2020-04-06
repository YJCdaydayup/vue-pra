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
    let flag = false
    let matchId
    let ids = Object.keys(global.sessionStorage)
    for (let i = ids.length;i--;) {
        let id = ids[i]
        let val = global.sessionStorage[id]
        if (val.username == username) {
            flag = true
            matchId = id
            break
        }
    }

    if (flag) {
        // 已经登录过，直接跳转到主页
        ctx.body = {
            code: -1,
            msg: '该用户已经登录过了',
            path: `/?id=${matchId}&username=${username}`
        }
        return false
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
