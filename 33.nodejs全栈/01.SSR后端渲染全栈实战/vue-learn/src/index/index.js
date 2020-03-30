/**
 * Created by yangli on 2020/2/16.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store/index'


Vue.use(VueRouter)

import i18n from './../plugins/i18n'

import {SUPPORT_LOCALES} from './../constants/locales'

function getLocaleRegex() {
    let reg = ''
    SUPPORT_LOCALES.forEach((locale, index)=>{
        reg = `${reg}${locale.code}${index !==SUPPORT_LOCALES.length - 1?'|':''}`
    })
    return `(${reg})`
}

function getLocale(locale = 'en') {
    return SUPPORT_LOCALES.find(loc => loc.code === locale)
}

import home from './../components/home.vue'
import about from './../components/about.vue'
import error from './../components/404.vue'
import Index from './../components/index.vue'

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: `/:locale${getLocaleRegex()}?`,
            component: Index,
            children: [
                {
                    path: 'home',
                    component: home
                },
                {
                    path: 'about',
                    component: about
                }
            ]
        },
        {
            path: '*',
            name: 'Error',
            component: error
        }
    ],
    // beforeEach(to, from, next) {
    //     alert('123')
    //     let locale = getLocale('en')
    //     window.alert(JSON.stringify(locale))
    //     window.console.log(locale)
    //     store.dispatch('setLocale', locale)
    //     i18n.locale = locale.code
    //     next()
    //     // axios.get(locale.translations).then(res => {
    //     //
    //     // })
    // }

})

router.beforeEach(function (to, from ,next) {

        // let paths = getLocaleRegex().split('|')
        let lo = to.path.match(/(\/(.+?)\/)/g)[0].split('/').filter((item)=>{
            return item.length > 0
        })[0]
        let locale = getLocale(lo)
        window.console.log(locale)
        store.dispatch('setLocale', locale)
        i18n.locale = locale.code
        next()
})

export default router