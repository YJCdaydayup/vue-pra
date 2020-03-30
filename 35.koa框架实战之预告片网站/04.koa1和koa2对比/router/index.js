const Router = require('koa-router')

let router = new Router({
    prefix: '/api'
})

router.get('/', async (ctx, next) => {

})

module.exports = router