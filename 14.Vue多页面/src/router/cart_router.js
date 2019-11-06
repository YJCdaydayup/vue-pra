import Vue from 'vue';
import Router from 'vue-router';
import page1 from './../pages/cart/page1.vue';
import page2 from './../pages/cart/page2.vue';
import page3 from './../pages/cart/page3.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/page1'
        },
        {
            path: '/page1',
            name: 'page1',
            component: page1,
        },
        {
            path: '/page2',
            name: 'page2',
            component: page2
        },
        {
            path: '/page3',
            name: 'page3',
            component: page3
        }
    ]
});
