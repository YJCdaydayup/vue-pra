<template>
    <div>
        <h3>我是C-Child页面</h3>
        <strong>child1: {{child1}}</strong>
        <button @click="click">点击子组件</button>
        <!--

        1.在最外层的父组件统一派发传递的属性
        2.v-bind="$attrs" 就是让孙子组件获取子组件props以外传递的属性
        3.v-on="$listeners" 就是将孙子组件通过正常的$emit派发的事件传递给最外层的父组件来相应

        -->
        <sub-child @click-sub-child="clickchild" v-bind="$attrs" v-on="$listeners"/>

        <hr color="yellow"/>

        <h3>{{msg1}}</h3>
        <h3>{{msg2}}</h3>
        <h3>{{msg3}}</h3>

        <button @click="change">改变msg</button>
        <button @click="resets">重置</button>
        <hr color="yellow"/>
    </div>
</template>
<style>

</style>

<script>

    import SubChild from './subChild/c-child-child.vue'

    export default {
        props: {
            child1: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        data() {
            return {
                msg1: '原始信息1',
                msg2: '原始信息2',
                msg3: '原始信息3'
            }
        },
        components: {
            SubChild
        },
        methods: {
            click() {
                this.$emit('click-child', '点击了子组件')
            },
            clickchild(e) {
                alert(e + 1)
            },
            change() {
                this.msg1 = 'change1'
                this.msg2 = 'change2'
                this.msg3 = 'change3'
            },
            resets() {
                let currentData = this.$data
                let originData = this.$options.data(this)
                window.console.log(currentData)
                window.console.log(originData)
                Object.assign(currentData, originData)
            }
        }
    }
</script>  
   

