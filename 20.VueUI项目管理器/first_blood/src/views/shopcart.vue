<template>
    <div class="shop-cart">
        <div class="header border_bottom_1">购物车</div>
        <cart-list class="list"/>
        <cart-control/>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    @import "./../stylus/common.styl"

    .shop-cart
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        .list
            position absolute
            left 0
            top 64px
            right 0
            bottom 70px
            overflow scroll
        .header
            border_bottom_1(rgba(29, 29, 29, 1))
            width 100%
            height 64px
            line-height 64px
            text-align center
            background-color #ccc
            color #000
            font-size 20px
            font-weight 600

</style>

<script>

    import CartControl from './../components/cartcontrol.vue'
    import CartList from './../components/cartlist.vue'

    export default {
        data() {
            return {
            }
        },
        computed: {
            height: () => (document.documentElement.clientHeight || document.body.offsetHeight) - 70 - 134
        },
        components: {
            CartControl,
            CartList
        }
    }
</script>  
   

