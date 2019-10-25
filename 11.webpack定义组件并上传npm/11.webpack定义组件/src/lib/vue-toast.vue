<template>
<!--    <transition name="fade">-->
        <div class="toast" v-show="visible" :class="showout">
            <span>{{ message }}</span>
        </div>
<!--    </transition>-->
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .toast
        position fixed
        bottom 36px
        left 50%
        background-color rgba(29, 29, 29, 0.3)
        transition opacity 1s linear
        opacity 0
        &.in
            opacity 1

        &.out
            opacity 0

</style>

<script>
    export default {
        data() {
            return {
                visible: true,
                message: "",
                showout: 'out'
            }
        }
    }
</script>  
   

