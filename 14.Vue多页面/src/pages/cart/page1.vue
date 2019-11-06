<template>
    <div @click="push" class="box">page1</div>
</template>

<script>
    export default {
        name: "page1",
        methods: {
            push() {
                this.$router.push({path:'/page2'})
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
        background-color hotpink

</style>