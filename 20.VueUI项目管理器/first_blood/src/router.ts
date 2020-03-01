import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import shopcart from './views/shopcart.vue';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'index',
            component: shopcart
        },
        {
            path: '/home/center',
            name: 'center',
            component: () => import('./views/Center.vue')
        },
        {
            path: '/home/center/list',
            name: 'list',
            component: () => import('./views/List.vue')
        },
        {
            path: '/home/center/list/application',
            name: 'application',
            component: () => import('./views/Application.vue')
        },
    ],
});

export default router;
