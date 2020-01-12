import Vue from 'vue'

Vue.directive('n',{
    // 初始化的时候调用
    // binding.value,binding.oldValue
    // 对比v-if的绑定值用法
    bind(el,binding,) {
        // textContent DOM文本的值
        el.textContent = Math.pow(binding.value,2);
        //

    },
    // 插入父节点调用
    // inserted(el) {},
    // 绑定的值发生变化时调用
    update(el,binding) {
        el.textContent = Math.pow(binding.value,2);
    }
});