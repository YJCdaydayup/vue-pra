/**
 * Created by yangli on 2020/2/1.
 */

import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'

import User from '../dbs/model/users'
import Passport from './utils/passport'
import Email from '../dbs/config'
import axios from './utils/axios'


let router = new Router({
  prefix: '/users'
})

let Store = new Redis().client

// 注册
router.post('/signup', async (ctx) => {
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body;

  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code')
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      }
    }else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
      return false
    }
  }else {
    // 没有传验证码
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }

  let user = await User.find({
    username
  })

  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已被注册'
    }
    return false
  }

  // 写库

  console.log('AABCBCBCB')

  console.log(username,password,email)

  console.log('AABCBCBCB')

  let nuser = await User.create({
    username,
    password,
    email
  })

  // 新数据写库成功后进行登录操作
  if (nuser) {
    let res = await axios.post('/users/signin', {
      username,
      password
    })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    }else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  }else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})


// 登录
router.post('/signin', async (ctx, next)=>{
  return Passport.authenticate('local', function(err, user, info, status){
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    }else
      // 这里拿到的是user数据对象
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }

        return ctx.login(user)
      }else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    })(ctx, next)
})

router.post('/verify', async (ctx, next) => {
  let username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`,'expire')
  if (saveExpire && new Date().getTime() - saveExpire > 0) {
    ctx.body = {
      code: -1,
      msg: '严重请求过于频繁，一分钟内一次'
    }
    return false
  }

  let transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    post: 587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })

  let ko = {
    code: Email.smtp.code,
    expire: Email.smtp.expire,
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }

  let mailOptions = {
    from: `"认证邮件"<${Email.smtp.user}>`,
    to: ko.email,
    subject: '哈哈，我在测试发邮箱',
    html: `我送你离开，千里之外，你无声黑白，邀请码是：${ko.code}`
  }

  await transporter.sendMail(mailOptions, (err, info)=>{
    if (err) {
      return console.log('error')
    }else {
      // 将验证码，过期时间，邮箱存储起来，并对应上这个用户名
      // 存储验证码
      Store.hmset(`nodemail:${ko.user}`,'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送，可能会有延时，有效期1分钟'
  }
})

router.get('/exit', async (ctx, next)=>{
  // 注销
  await ctx.logout()
  // 看是否注销掉
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  }else {
    ctx.body = {
      code: -1
    }
  }
})

// *********

// 已解决！！！
// 遗留问题：redis里面以及存储了cookie里面的信息，但是sessionid没有生成，导致cookie没有派发个客户端，没法做到保持登录状态

// *********
router.get('/getUser', async (ctx)=>{
  console.log(ctx.session)
  if (ctx.isAuthenticated()) {
    const {username, email} = ctx.session.passport.user;
    ctx.body = {
      user: username,
      email
    }
  }else {
    ctx.body = {
      user: '',
      email: ''
    }
  }
})

export default router
