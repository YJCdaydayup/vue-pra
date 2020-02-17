<template>
    <div>
        <h3>我是孙子页面</h3>
        <em>ccchild: {{ccchild}}</em>
        <button @click="click">点击孙子组件</button>
    </div>
</template>
<style>

</style>

<script>
    export default {
        props: {
            ccchild: {
                type: String,
                default: ''
            }
        },
        methods: {
            click() {
                this.$emit('click-sub-child', '点击孙子组件')
            }
        }
    }
</script>  
   

