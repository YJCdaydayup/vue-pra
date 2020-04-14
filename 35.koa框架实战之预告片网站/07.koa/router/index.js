const Router = require('koa-router')
const cryptoJS = require('crypto-js')
import Tool from './../tools/tool'
import User from '../dbs/schema/user.js'
import Message from '../dbs/schema/message.js'

let router = new Router({
    prefix: ''
})

router.get('/', async (ctx, next)=>{
    let id = ctx.query.id
    let username = ctx.query.username
    if (!username || !id) {
        return ctx.redirect('/login')
    }

    console.log('啊上传就看你撒CBA四川撒娇哭')
    console.log(global.sessionStorage)
    console.log('啊上传就看你撒CBA四川撒娇哭')

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
    console.log(username)
    let user = await User.findOne({
        name: username
    })
    
 console.log(username + '122dvc')
    if (user) {
        console.log('jinlail ')
        // 已经登录过，直接跳转到主页
        return ctx.body = {
            code: -1,
            msg: '该用户已经登录过了',
            path: `/?id=${user.uid}&username=${user.name}`
        }
    }

    // let ids = Object.keys(global.sessionStorage)
    // for (let i = ids.length;i--;) {
    //     let id = ids[i]
    //     let val = global.sessionStorage[id]
    //     if (val.username == username) {
    //         flag = true
    //         matchId = id
    //         break
    //     }
    // }

    // if (flag) {
    //     return ctx.body = {
    //       code: -1,
    //       msg: '该用户已经登录过了',
    //       path: `/?id=${matchId}&username=${username}`
    //     }
    // }

    let id = Math.floor(Math.random() * 10000000).toString(16)
    id = cryptoJS.MD5(id).toString()
    // ctx.session.username = username
    // ctx.session.id = id
    await User.create({
        name: username,
        uid: id
    })

    await Message.create({
        uid: id
    })

    await Tool.loadInfoInSessionStorage()

    ctx.body = {
        code: 0,
        id
    }
})

// module.exports = router
export default router
