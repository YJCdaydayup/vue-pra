import Router from 'koa-router'
import miniApi from './../controllers/miniApi'

let router = new Router({
    prefix: '/mini-api/user'
})

router.get('/get-openid', miniApi.getOpenId)
router.post('/post-user', miniApi.postUser)

export default router