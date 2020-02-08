/**
 * Created by yangli on 2020/2/3.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import geo from './geo'
import home from './home'
import axios from './../server/interface/utils/axios'

// Vue.use(Vuex)

export const actions = {
    // 研究一下第二个参数里面的app对象,顺便研究下那个完整项目的登录使用vuex的情况
    async nuxtServerInit(store, {req, app,redirect,error}) {
      // error(404,'错误页面')
      // redirect('https://www.baidu.com')

      // 获取全局定位地址
      const {status, data: {province,city}} = await app.$axios.get('/geo/getPosition')
      store.commit('geo/setPosition',status === 200? {city,province} : {city: '',province: ''})

      // 获取hotPlace
      const {status:status2,data: {menu}} = await app.$axios.get('/geo/menu')
      store.commit('home/setMenu',status2 === 200? menu.menu: [])

      // 获取热门城市
      const {status:status3, data: {result}} = await app.$axios.get('/search/hotPlace',{
        params: {
          city: '三亚'
        }
      })


      console.log(result)
      store.commit('home/setHotPlace',status3 === 200 ? result:[])
    }
  }

// export default store
