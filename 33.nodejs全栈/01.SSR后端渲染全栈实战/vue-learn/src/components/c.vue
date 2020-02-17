<template>
    <div ref="box">
        <h2>我是Page C页面</h2>
        <c-child @click-child="clickchild" :child1="child1" :ccchild="subChild" @click-sub-child="clicksubchild"/>
        <button @click="show">展示loading</button>
    </div>
</template>

<script>

    import CChild from './child/c-child.vue'

    export default {
        data() {
          return {
              child1: '我是c-child的属性',
              subChild: '我是孙子组件的属性'
          }
        },
        components: {
            CChild
        },
        methods: {
            clickchild(e) {
                alert(e)
            },
            clicksubchild(e) {
                alert(e)
            },
            show() {
                this.$loading.show({
                    text: '拼命加载中...'
                })

                setTimeout(()=>{
                    this.$loading.hide()
                }, 2000)
            }
        }
    }
</script>  
   

