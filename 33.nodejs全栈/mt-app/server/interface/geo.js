/**
 * Created by yangli on 2020/2/3.
 */

import Router from 'koa-router'
import axios from './utils/axios'
import Menu from './../dbs/model/menu'
import Province from './../dbs/model/province'
import City from './../dbs/model/city'

let router = new Router({
  prefix: '/geo'
})

const sign = 'abcd'

router.get('/getPosition', async (ctx) => {
  let {status, data: {province, city}} = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  if (status === 200) {
    ctx.body = {
      code: 0,
      province,
      city
    }
  }else {
    ctx.body = {
      code: 1,
      province: '',
      city: ''
    }
  }
})

router.get('/menu',async (ctx)=>{
  let menu =  await Menu.findOne({})
  ctx.body = {
    menu
  }
})

router.get('/province/:id', async (ctx) => {
  let id = ctx.params.id
  console.log(id)
  let result = await City.findOne({
    id
  })

  // console.log(result)

  ctx.body = {
    city: result.value
  }
})

router.get('/province', async (ctx) => {
  let province = await Province.find({})
  ctx.body = {
    province: province.map(item => {
      return {
        id: item.id,
        name: item.value
      }
    })
  }
})

router.get('/city', async (ctx) => {

  let result = await City.find({})
  let cities = []
  for (let i = result.length ;i-- ;) {
    let item = result[i]
    for (let j = item.value.length; j--;) {
      cities.push(item.value[j].name)
    }
  }
  // console.log(cities)
  ctx.body = {
    cities
  }
})

router.get('/hotCity', async (ctx) => {
  // http://cp-tools.cn/geo/hotCity?sign=
 let {status, data: {hots}} =  await axios.get(`http://cp-tools.cn/geo/hotCity?sign=${sign}`)
  ctx.body = {
   hots: status === 200 ? hots : []
  }
})

router.get('/catagoryCity', async (ctx) => {

})





export default router
