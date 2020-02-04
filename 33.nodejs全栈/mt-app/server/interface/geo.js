/**
 * Created by yangli on 2020/2/3.
 */

import Router from 'koa-router'
import axios from './utils/axios'
import Menu from './../dbs/model/menu'

let router = new Router({
  prefix: '/geo'
})

const sign = 'abc'

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


export default router
