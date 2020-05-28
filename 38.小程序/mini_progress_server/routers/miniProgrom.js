const Router = require('koa-router')
import miniProgram from './../controllers/miniProgram'

const router = new Router({
    prefix: ''
})

router.get('/', miniProgram.getInfo)
router.get('/getData', miniProgram.getData)
router.post('/uploadFile', miniProgram.uploadFile)
router.post('/login', miniProgram.login)

export default router