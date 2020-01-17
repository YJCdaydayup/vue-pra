const Router = require('koa-router');

const router = new Router({
    prefix: '/city'
})

router.get('/list', async (ctx)=>{
    ctx.session.user = 'Tom'
    ctx.body = {
        list: [
            '北京',
            '天津',
            '惠州',
            ctx.session.user
        ]
    }
})

export default router