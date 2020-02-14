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

router.get('/products', async (ctx) => {
  let keyword = ctx.query.keyword || '旅游'
  let city = ctx.query.city || '北京'
  let {status, data: {product, more}} = await axios.get('http://cp-tools.cn/search/products',{
    params:{
      keyword,
      city,
      sign
    }
  })

  if  (status === 200) {
    ctx.body = {
      product,
      more: ctx.isAuthenticated()? more: [] //这里可以直接判断是否判断
    }
  }else {
    ctx.body = {
      product: {},
      more: [],
      login: false
    }
  }

})

export default router
