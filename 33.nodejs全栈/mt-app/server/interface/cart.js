/**
 * Created by yangli on 2020/2/3.
 */

import Router from 'koa-router'
import axios from './utils/axios'
import Cart from '../dbs/model/cart'
import md5 from 'crypto-js/md5'

let router = new Router({
  prefix: '/cart'
})


// 创建购物车，返回购物车的相关信息
router.get('/create', async (ctx) => {

  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: 'please login'
    }
    return false
  }else {
    let time = Date()

    let cartNo = md5(Math.random() * 1000 + time).toString()
    // let {params: {id, detail}} = ctx.query
    let cart = new Cart({
      id: '1234dsasadada',
      cartNo,
      time,
      user: ctx.session.passport.user,
      detail: {
        name: '湘美蓉(车站北路店)',
        price: 54.00,
        imgs: 'https://p0.meituan.net/dnaimgdark/e9e28a2fe3f4ce57503e2a2b53e8458a5497506.jpg@368w_208h_1e_1c'
      }
    })

    let result = await cart.save()

    if (result) {
      ctx.body = {
        code: 0,
        msg: '',
        id: cartNo
      }
    }else {
      ctx.body = {
        code: -1,
        msg: '创建购物车'
      }
    }
  }
})

router.get('/getCart', async (ctx)=> {
  let {id} = ctx.query
  try {
   let result = await Cart.findOne({cartNo: id})
    console.log(result)
    ctx.body = {
      code: 0,
      data: result?result.detail[0]: {}
    }
  }catch (err) {
    ctx.body = {
      code: -1,
      err
    }
  }
})




export default router
