# yangli-toast-demo

a mobile toast plugin for vue

##Usage

import Toast from ""

Vue.use(Toast)

this.$toast.show("this is a message",{
    duration: 1000
    },()=>{
    console.log(“回调”)；
})
