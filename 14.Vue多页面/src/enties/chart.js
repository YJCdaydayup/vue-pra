import App from './../common/common'
import Chart from '../pages/chart/chart.vue'
import Vue from '../../node_modules/vue/dist/vue.js'
// import './../styles/base.styl'
import VCharts from 'v-charts'
import './../../node_modules/swiper/dist/css/swiper.css'
import './../../node_modules/v-charts/lib/style.min.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

App.getVueInstance().use(VCharts);
// Vue.use(VueAwesomeSwiper)
App.bind(Chart)

/**
 * 1.多页面其实就是多个SPA项目组合在一起，只是没有路由的概念了，依赖的组建还是可以用的，在最前面添加到Vue原型里面Vue.use()或者直接使用
 */
