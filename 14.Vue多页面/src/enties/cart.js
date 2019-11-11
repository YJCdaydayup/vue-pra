import Vue from 'vue'
import router from './../router/cart_router'
import cart_by from '../pages/cart/cart_by.vue'
// import 'element-ui/lib/theme-chalk/index.css';
// import App from './../common/common'
// App.bind(cart)
// import cart from "../pages/cart/cart";

import Element from 'element-ui'

// Vue.use(Element,{
//     size: 'small',
//     zIndex: 3000
// });


// import {
//     Button,
//     Select
// } from 'element-ui'
//
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select)
// import './../../node_modules/element-ui/lib/theme-chalk/index.css'
// import {Button, Row, Col, InputNumber,Cascader,Popover} from 'element-ui';
//
// Vue.use(Element, { size: 'large', zIndex: 3000 })
//
// Vue.use(Button)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(InputNumber)
// Vue.use(Popover)

new Vue({
    el: "#app",
    router,
    render(h) {
        return h(cart_by);
    }
});
