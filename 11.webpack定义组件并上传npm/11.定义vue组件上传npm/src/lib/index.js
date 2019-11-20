import ToastComponent from "./vue-toast.vue"

let Toast = {};
Toast.install = function (Vue,options) {
    var opt = {
        duration: 3000
    }

    for (var key in options) {
        opt[key] = options[key];
    }

    Vue.prototype.$toast = function (message, option, callback) {
        if (typeof option == 'object') {
            for (var key in option) {
                opt[key] = option[key];
            }
        }

        let ToastController = Vue.extend(ToastComponent);

        let instance = new ToastController().$mount(document.createElement('div'));
        instance.message = message;
        instance.visible = true;

        document.body.appendChild(instance.$el);

        setTimeout(()=>{
            instance.visible = false;
            setTimeout(()=>{
                document.body.removeChild(instance.$el);
            },1000);
            typeof callback == 'function' ? callback():null;
        },opt.duration);
    }

    Vue.prototype.$toast["show"] = function (message, option, callback) {
        Vue.prototype.$toast(message, option, callback);
    }

    Vue.prototype.$toast["success"] = function (message, option, callback) {
        Vue.prototype.$toast(message, option, callback);
    }

    Vue.prototype.$toast["info"] = function (message, option, callback) {
        Vue.prototype.$toast(message, option, callback);
    }

    Vue.prototype.$toast["error"] = function (message, option, callback) {
        Vue.prototype.$toast(message, option, callback);
    }
}

console.log('asdfgh')
if (window.Vue) {
    console.log(1234567890)
    Vue.use(Toast);
}

export default Toast;