<template>
    <transition name="fade">
        <div class="toast" v-show="visible">
            <span>{{ message }}</span>
        </div>
    </transition>
</template>

<style lang="stylus" rel="stylesheet/stylus">
        .toast
            transition all 2s
            opacity 1
            position fixed
            bottom 36px
            left 50%
            background-color rgba(29, 29, 29, 0.3)
            opacity 1
            &.fade-enter, &.fade-leave-to
                opacity 0


</style>

<script>
    export default {
        data() {
            return {
                visible: false,
                message: ""
            }
        },
        components: {}
    }
</script>  
   

