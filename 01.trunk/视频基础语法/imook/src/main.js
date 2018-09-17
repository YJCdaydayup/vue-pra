// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'

// import {sum,minus} from './Utils'
// 也可以封装成一个对象引入
// import * as TestUtil from './Utils'

// console.log(TestUtil.sum(1,2));
// console.log(TestUtil.minus(10,8));

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({ // 这个实例是整个页面的入口
  // el: '#app', //
  router, // 需要的路由
  // components: { App }, // 模版

  // 过去的写法
  // render: h=>h(App)
  render: function (h) {
    return h(App);
  }

  // template: '<App/>' // 组件


}).$mount("#app");


