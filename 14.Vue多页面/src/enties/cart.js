import Vue from 'vue'
import router from './../router/cart_router'
import cart_by from '../pages/cart/cart_by.vue'

// import App from './../common/common'
// App.bind(cart)
// import cart from "../pages/cart/cart";

new Vue({
    el: "#app",
    router,
    computed: {
        ViewPage() {
            return cart_by;
        }
    },
    render(h) {
        return h(this.ViewPage);
    }
});
