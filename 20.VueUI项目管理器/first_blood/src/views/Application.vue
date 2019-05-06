<template>
    <div class="application">
        <div class="nav-bread">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <router-link to="/home">Home</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <router-link to="/home/center">Application Center</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <router-link to="/home/center/list">Application List</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <a-button @click="show=!show"></a-button>
        <div class="origin-box">
            <div class="inner">力哥</div>
        </div>
        <transition name="move">
            <div v-show="show" class="box">
                <div class="inner">力哥</div>
            </div>
        </transition>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .application
        .nav-bread
            text-align left
        .origin-box
            width 36px
            height 36px
            border-radius 18px
            border 1px solid red
            display flex
            justify-content center
            align-items center
            position relative
            left 100px
            .inner
                width 26px
                height 26px
                border-radius 12px
                background-color lightpink
                color black
                font-size 14px
                text-align center
                line-height 26px
                font-weight 600
        .box
            width 36px
            height 36px
            border-radius 18px
            border 1px solid red
            display flex
            justify-content center
            align-items center
            transition all 0.5s
            transform translate3d(0, 0, 0)
            margin-top -36px
            &.move-enter, &.move-leave-to
                transform translate3d(100px, 0, 0)
                .inner
                    transform rotate(330 * 10deg)
            .inner
                width 26px
                height 26px
                border-radius 12px
                background-color lightpink
                color black
                font-size 14px
                text-align center
                line-height 26px
                font-weight 600
                transition all 0.5s
                transform rotate(20deg)
                /*&.move-enter, &.move-leave-to*/

</style>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>
