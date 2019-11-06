<template>
    <div class="box">
        <div @click="push1">page2</div>
        <h3 @click="push3">page3</h3>
    </div>
</template>

<script>
    export default {
        name: "page2",
        methods: {
            push1() {
                this.$router.go(-1)
            },
            push3() {
                this.$router.push({path:'/page3'})
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .box
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        background-color lemonchiffon

</style>