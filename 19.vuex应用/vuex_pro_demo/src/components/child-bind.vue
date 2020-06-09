<template>
    <div class="child-box">
        {{meta}}
        <button class="btn" @click="changeMeta">父子组件的双向绑定</button>  
    </div>
</template>

<style lang="stylus" scoped>
    .child-box 
        .btn 
            outline none
            text-align center
            display inline-block
            height 100%
            width 100vw
            padding 30px
            background-color #eee
            border none
            margin-top 100px
            transition all 0.5s linear
            &:active 
                background-color rgb(240,220,120)
</style>

<script>
export default {
    props: {
        meta: {
            type: String,
            default: 'ABCDEFG'
        }
    },
    methods: {
        changeMeta() {
            // this.meta = "1234"
            this.$emit('do-change','1234')
        }
    }
}
</script>
