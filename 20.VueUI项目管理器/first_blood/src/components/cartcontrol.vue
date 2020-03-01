<template>
    <div class="cart-control">
        <div class="cart-count">
            <a-icon class="icon" type="shopping-cart"/>
            <span>{{count}}</span>
        </div>
        <a-button type="primary">购买</a-button>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .cart-control
        position absolute
        left 0
        bottom 0
        right 0
        height 70px
        background-color black
        display flex
        align-items center
        justify-content space-around
        .cart-count
            position relative
            .icon
                font-size 42px
                color #fff
            >span
                display inline-block
                position: absolute
                top 0
                right -5px
                width 20px
                height 20px
                border-radius 10px
                color #fff
                background-color red


</style>

<script>
    export default {
        data() {
            return {
                count: 1
            }
        },
        components: {}
    }
</script>  
   

