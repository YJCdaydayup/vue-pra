<template>
    <div class="box">
        <div class="test" @click="click" @touchmove="move" @mousedown="down">
            <div ref="ball" class="ball"></div>
        </div>
        <div>
            <Layout/>
        </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .box
        position absolute
        left: 0
        top: 0
        right: 0
        bottom: 0
        background-color antiquewhite
        /*display flex*/
        /*justify-content center*/
        /*align-items center*/
        /*flex-direction column*/
        .test
            width 100%
            height 0
            padding-top 100%
            background-color palegreen
            .ball
                position absolute
                width 50px
                height 50px
                top: 0
                left: 0
                border-radius 50%
                background-color lightcoral
</style>

<script>

    import Layout from './../../component/layout.vue'

    export default {
        data() {
            return {
                msg: '我是购物车页面',
                ball: ''
            }
        },
        methods: {
            click(event) {
                let {clientX,clientY} = event;
                this.ball = this.$refs.ball;
                this.ball.style.left = clientX + 'px'
                this.ball.style.top = clientY + 'px';
            },
            move(event) {
                let {changedTouches} = event;
                let {clientX,clientY} = changedTouches[0]
                console.log(clientX,clientY)
                this.ball.style.left = clientX + 'px'
                this.ball.style.top = clientY + 'px';
            },
            down(event) {
                let {clientX,clientY} = event;
                console.log(clientX,clientY)
            }
        },
        components: {
            Layout
        }
    }

</script>
