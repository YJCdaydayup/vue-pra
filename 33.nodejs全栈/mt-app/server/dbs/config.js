/**
 * Created by yangli on 2020/2/1.
 */

export default {
  dbs: 'mongodb://127.0.0.1: 27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1012140802@qq.com'
    },
    get pass() {
      return 'yhslksxqgkbhbcci'
    },
    // 创建四位数的随机数
    get code() {
      return (() => {
        return Math.random().toString(16).slice(2,6).toUpperCase()
      })()
    },
    // 创建过期事件
    get expire() {
      return (()=>{
        return new Date().getTime() + 60 * 60*1000
      })()
    }
  }
}
