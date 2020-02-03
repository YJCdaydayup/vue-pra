/**
 * Created by yangli on 2020/2/1.
 */


// 全局的axios的二次添加配置

import axios from 'axios'

const instance = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
  timeout:1000,
  headers: {

  }
})

export default instance
