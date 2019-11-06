<template>
   <div class="box">
       <div @click="back">page3</div>
       <div @click="backs">返回到1</div>
   </div>
</template>

<script>
    export default {
        name: "page3",
        methods: {
            back() {
                this.$router.go(-1);
            },
            backs() {
                this.$router.go(-2);
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
        background-color salmon
</style>