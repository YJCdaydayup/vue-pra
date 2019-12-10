import ToastComponent from "./vue-toast.vue"

let Toast = {};
Toast.install = function (Vue, options) {
    let opt = {
        duration: 3000
    }

    for (let key in options) {
        opt[key] = options[key];
    }

    // Vue.prototype.$toast = function (message, option, callback) {
    //     if (typeof option == 'object') {
    //         for (var key in option) {
    //             opt[key] = option[key];
    //         }
    //     }
    //
    //     let ToastController = Vue.extend(ToastComponent);
    //
    //     let instance = new ToastController().$mount(document.createElement('div'));
    //     instance.message = message;
    //     instance.visible = true;
    //
    //     document.body.appendChild(instance.$el);
    //
    //     // setTimeout(()=>{
    //     //     instance.visible = false;
    //     //     setTimeout(()=>{
    //     //         document.body.removeChild(instance.$el);
    //     //     },1000);
    //     //     typeof callback == 'function' ? callback():null;
    //     // },opt.duration);
    // }

    Vue.prototype.$alert = function (message, callback) {

        let ToastController = Vue.extend(ToastComponent);

        let instance = new ToastController().$mount(document.createElement('div'));
        instance.message = message;
        instance.visible = true;

        document.body.appendChild(instance.$el);

        console.log(instance.$refs.confrimBtn)

        instance.$refs.confrimBtn.addEventListener('click', function () {
            instance.visible = false;
            setTimeout(() => {
                document.body.removeChild(instance.$el);
                typeof callback == 'function' ? callback() : null;
            }, 300);
        })
    }

    // setTimeout(()=>{
    //     instance.visible = false;
    //     setTimeout(()=>{
    //         document.body.removeChild(instance.$el);
    //     },1000);
    //     typeof callback == 'function' ? callback():null;
    // },opt.duration);
    Vue.prototype.$alert["show"] = function (message, callback) {
        Vue.prototype.$alert(message, callback);
    };
}

// Vue.prototype.$toast["show"] = function (message, option, callback) {
//     Vue.prototype.$toast(message, option, callback);
// }
//
// Vue.prototype.$toast["success"] = function (message, option, callback) {
//     Vue.prototype.$toast(message, option, callback);
// }
//
// Vue.prototype.$toast["info"] = function (message, option, callback) {
//     Vue.prototype.$toast(message, option, callback);
// }
//
// Vue.prototype.$toast["error"] = function (message, option, callback) {
//     Vue.prototype.$toast(message, option, callback);
// }

if (window.Vue) {
    Vue.use(Toast);
}

export default Toast;