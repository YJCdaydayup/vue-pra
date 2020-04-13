const Router = require('koa-router')
const User = require('./../controllers/users')

const router = new Router({
    prefix: ''
})

router.get('/',User.showRegister)

module.exports = router