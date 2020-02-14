/**
 * Created by yangli on 2020/2/3.
 */

import Router from 'koa-router'
import axios from './utils/axios'
import Order from './../dbs/model/order'
import md5  from 'crypto-js/md5'
import Cart from './../dbs/model/cart'

let router = new Router({
  prefix: '/order'
})

router.post('/createOrder', async (ctx) => {
  let {id, price, count} = ctx.request.body
  let time = Date()
  let orderID = md5(Math.random() * 1000 + time).toString()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: 'please login'
    }
  }else {
    let findCart = await Cart.findOne({cartNo: id})
    let order = new Order({
      id: orderID,
      count,
      total: price * count,
      time,
      user: ctx.session.passport.user,
      name: findCart.detail[0].name,
      status: 0,
      imgs: findCart.detail[0].imgs
    })

    try {
      let result = await order.save()
      if (result) {
        await Cart.deleteOne({cartNo: id})
        ctx.body = {
          code: 0,
          id: orderID
        }
      }else {
        ctx.body = {
          code: -1
        }
      }
    }catch (err) {
      ctx.body = {
        code: -1
      }

    }
  }
})

router.get('/getOrders', async (ctx) => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: 'please login'
    }
  }else {
    try {
      let result = await Order.find({})
      ctx.body = {
        code: -1,
        list: result
      }
    }catch (err) {
      ctx.body = {
        code: -1,
        msg: '查询失败'
      }
    }
  }
})


export default router
