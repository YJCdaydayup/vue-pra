/**
 * Created by yangli on 2020/2/1.
 */

import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from './../../dbs/model/users'


// 可以查通用的passport的用法
// koa-passport是对passport的封装

passport.use(new LocalStrategy(async function(username, password,done){

  let where = {
    username
  }

  let result = await UserModel.findOne(where)
  if (result != null) {
    if (result.password === password) {
      return done(null, result)
    } else {
      return done(null, false, '密码错误')
    }
  }else {
    return done(null, false, '用户不存在')
  }
}))

// 登录成功,执行return ctx.login(user)，就会执行这个方法，将use里面查到的user对象数据存到session中，进而存到redis里面
passport.serializeUser(function(user, done) {
  done(null, user)
})

// 请求时从session中读取用户数据
passport.deserializeUser(function(user, done){
  return done(null, user)
})

export default passport;
