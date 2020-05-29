import User from './../dbs/schema/user'
import md5 from 'md5'
import {
  v4 as uuidv4
} from 'uuid'
import mongoose from 'mongoose'

export default {
    async getOpenId(ctx, next) {
        let { code } = ctx.query
        console.log(uuidv4())
        let user = new User({
            uid: uuidv4(),
            openId: md5(code),
            authToken: {
                code
            }
        })
        console.log(user)
        await user.save()
        ctx.body = {
            status: 200,
            errMsg: 'request:ok',
            data: {
                openId: md5(code)
            }
        }
    },
    async postUser(ctx, next) {
        console.log(ctx.request.body)
        let {
          nickName,
          gender,
          language,
          city,
          province,
          country,
          avatarUrl,
          openId,
        } = ctx.request.body
        let user = await User.findOne({openId})
        user.nickName = nickName
        user.gender = gender
        user.language = language
        user.city = city
        user.province = province
        user.avatarUrl = avatarUrl
        console.log(user)
        await user.save()
        ctx.body = {
          status: 200,
          errMsg: 'request:ok',
          data: {
            openId,
            nickName,
            avatarUrl,
            province
          }
        }
    }
}