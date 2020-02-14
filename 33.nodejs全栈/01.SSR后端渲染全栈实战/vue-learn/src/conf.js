/**
 * Created by yangli on 2020/2/13.
 */

import Vue from 'vue'

Vue.mixin({
    methods: {
        $showAlert(msg) {
            alert(msg)
        }
    }
})
