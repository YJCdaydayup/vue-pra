import verify from './../pages/vurify/verrify.vue'
import App from './../common/common'

import Vuerify from 'vuerify'

let Vue = App.getVueInstance();
Vue.use(Vuerify)

App.bind(verify);