/**
 * Created by yangli on 2020/2/3.
 */

import Router from 'koa-router'
import axios from './utils/axios'
import Category from './../dbs/model/category'

let router = new Router({
  prefix: '/category'
})

const sign = 'abcd'

router.get('/crumb', async (ctx) => {
  // let {status, data: {areas, types}} = await axios.get(`http://cp-tools.cn/categroy/crumbs?sign=${sign}`, {
  //   params: {
  //     city: ctx.query.city.replace('市', '') || '北京'
  //   }
  // })

  let result = await Category.find({city: ctx.query.city.replace('市', '') || '北京'})
  ctx.body = {
    result
  }
})

export default router
