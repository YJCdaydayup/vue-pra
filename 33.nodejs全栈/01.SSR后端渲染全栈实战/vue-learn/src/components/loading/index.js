/**
 * Created by yangli on 2020/2/17.
 */
import Vue from 'vue'
import Loading from './loading.vue'

let LoadingFunc = Vue.extend(Loading)

let loadingInstance = new LoadingFunc({
    el: document.createElement('div')
})

loadingInstance.show = false

const loading = {
    show(options = {}) {
        loadingInstance.show = true
        if (options) {
            // options.el.appendChild(loadingInstance.$el)
            document.body.appendChild(loadingInstance.$el)
            loadingInstance.text = options.text
        }
    },
    hide() {
        loadingInstance.show = false
    }
}


// 在自定义组件上传npm时，用的是
// let Toast = {}
// Toast.install = function() {}

export default {
    install() {
        if (!Vue.prototype.$loading) {
            Vue.prototype.$loading = loading
        }

        // Vue.mixin({
        //     created() {
        //         this.$loading = Vue..$loading
        //     }
        // })
    }
}
