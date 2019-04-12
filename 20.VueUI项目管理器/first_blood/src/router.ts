import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import(/* webpackChunkName: "user" */ './components/Login.vue'),
                    meta: {model: 'Login'},
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./views/About.vue'),
        },
        {
            path: '/error',
            name: 'error',
            component: () => import(/* webpackChunkName: "user" */ './components/error.vue')
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.name === 'home') {
        next({
            path: '/111',
            query: {
                redirect: 'AAA'
            }
        })
        return false;
    }

    if (!to.name) {
        next({
            name: "error",
            query: {
                title: 'Error'
            }
        })
        return ;
    }

    next()
})

export default router;
