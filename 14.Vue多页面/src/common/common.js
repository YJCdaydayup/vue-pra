import Vue from '../../node_modules/vue/dist/vue.js'

export const App = {}

App.bindding = (com) =>{
    let MainPage = Vue.extend(com);
    new MainPage().$mount(document.querySelector('#app'));
}
