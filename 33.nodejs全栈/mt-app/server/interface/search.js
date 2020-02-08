/**
 * Created by yangli on 2020/2/7.
 */

import Router from 'koa-router'
import axios from './utils/axios'
import Poi from './../dbs/model/poi'

let router = new Router({
  prefix: '/search'
})

const sign = 'abc'

router.get('/top', async (ctx) => {

  let top = await Poi.find({
    city: ctx.query.city, //参数可以从前端的store里面传递过来
    name: new RegExp(ctx.query.input)
  });

  ctx.body = {
    top: top? top : []
  }
})

router.get('/hotPlace', async (ctx) => {
  // 也可以通过ctx.store获取到
  console.log(ctx.request.query.city)
  let result = await Poi.find({
    city: ctx.request.query.city
  })

  ctx.body = {
    result
  }
})

router.get('/resultsByKeywords', async (ctx) => {
  let {city, keyword} = ctx.query
  let {
    status,
    data: {
      count,
      pois
    }
  } = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    params: {
      city,
      keyword,
      sign
    }
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200
      ? pois
      : []
  }

})

export default router
