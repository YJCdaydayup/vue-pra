import ToastComponent from './vue-toast.vue'

let Toast = {};
// 1.必须定义install方法。才能被Vue.use使用
Toast.install = function (Vue, options) {

    let opt = {
        duration: 3000,
    };

    // 覆盖用户参数进来
    for (var key in options) {
        opt[key] = options[key];
    }

  Vue.prototype.$toast = function (message, option) {

      if (typeof option == 'object') {
          for (var key in option) {
              opt[key] = option[key];
          }
      }


      // 2.继承组件得到全新的组件实例
      let ToastController = Vue.extend(ToastComponent);
      let instance = new ToastController().$mount(document.createElement('div'));

      instance.message = message;
      instance.visible = true;

      document.body.appendChild(instance.$el);

      setTimeout(()=>{
          instance.visible = false;
          // 可以通过instance拿到挂载的标签对象
          document.body.removeChild(instance.$el);
      },opt.duration)
  }  
  
  Vue.prototype.$toast["show"] = function (message, option) {
      Vue.prototype.$toast(message,option);
  }
  
  Vue.prototype.$toast["succuss"] = function (message, option) {
      Vue.prototype.$toast(message, option)
  }

  Vue.prototype.$toast["info"] = function (message, option) {
      Vue.prototype.$toast(message, option)
  }

  Vue.prototype.$toast["error"] = function (message,option) {
      Vue.prototype.$toast(message, option);
  }
};


  if (window.Vue) {
    Vue.use(Toast);
  }

export default Toast;