import Vue from './node_modules/vue/dist/vue.js'
import App from './src/App.vue'

let MainPage = Vue.extend(App);

new MainPage().$mount(document.querySelector('#app'));

