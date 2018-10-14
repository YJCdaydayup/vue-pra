/**
 * Created by yangli on 2018/10/13.
 */

import ToastComponent from './vue-toast.vue'

// 插件的入口，核心

let Toast = {};
// 必须定义一个install方法，固定的
Toast.install = function (Vue, options) {

    var opt = {
        duration: 3000
    };

    // 覆盖参数，不用就是默认3000
    for (var key in options) {
        opt[key] = options[key];
    }

    // 在Vue的原型上加一个方法
    Vue.prototype.$toast = function (message, option) {

        if (typeof option == 'object') {
            // 覆盖参数，不用就是默认3000
            for (var key in option) {
                opt[key] = option[key];
            }
        }

        // 继承这个组件后，得到一个全新的Vue实例
        const ToastComponent = Vue.extend(ToastComponent);

        // 将这个实例
        var instance = new ToastComponent().$mount(document.createElement('div'));

        instance.message = message;
        instance.visibility = true;

        document.body.appendChild(instance.$el);

        setTimeout(()=>{
            instance.visibility = false;
            document.body.removeChild(instance.$el);
        },opt.duration);
    }

    // 在原来的基础上扩展函数
    Vue.prototype.$toast["show"] = function (message, option) {
        Vue.prototype.$toast(message,option);
    }

    Vue.prototype.$toast["success"] = function (message, option) {
        Vue.prototype.$toast(message,option);
    }

    Vue.prototype.$toast["info"] = function (message, option) {
        Vue.prototype.$toast(message,option);
    }

    Vue.prototype.$toast["error"] = function (message, option) {
        Vue.prototype.$toast(message,option);
    }
};


// 这个是打包是设置成umd后会添加到window上，如果添加到window上，就默认使用VUe.use
if (window.Vue) {
    Vue.use(Toast);
}


// 输出，固定的，这样vue.use才能找到它
export default Toast;
