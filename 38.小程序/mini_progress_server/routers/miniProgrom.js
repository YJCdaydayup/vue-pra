const Router = require('koa-router')
import miniProgram from './../controllers/miniProgram'

const router = new Router({
    prefix: ''
})

router.get('/', miniProgram.getInfo)
router.get('/getData', miniProgram.getData)

export default router