import Router from 'koa-router'
import config from '../../config/index'
import sha1 from 'sha1'

export default router = (app) => {
    const router = new router()
    console.log('asbjcsajlcnabkcas;cnskahcnkasl')
    router.get('/wechat-hear', async (ctx)=>{
        console.log('ABCDEFG')
        const {
            signature,
            nonce,
            timestamp,
            echostr
        } = ctx.query 

        const str = [token, timestamp, nonce].sort().join('')
        const sha = sha1(str)

        if (sha === signature) {
            ctx.body = echostr
        }else {
            ctx.body = 'Failed'
        }
    })

    app.use(router.routes())
    app.use(router.allowMethods())
}