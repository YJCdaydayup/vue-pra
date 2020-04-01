const Router = require('koa-router')

let router = new Router({
    prefix: '/chat'
})

router.get('/login', async (ctx, next) => {
    await ctx.render('login')
})

router.post('/doLogin', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = '1234'
})

module.exports = router