<template>
    <div class="container">
        <div class="nav">
            <div id="month" class="preBtn">本月</div>
            <div id="year" class="nextBtn">本年</div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <chart1></chart1>
                </div>
                <div class="swiper-slide">
                    <example01></example01>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    *
        padding 0
        margin 0

    .container
        .nav
            width 100%
            height 36px
            display flex
            text-align center
            font-size 0
            line-height 36px
            .preBtn
                font-size 16px
                flex 1
            .nextBtn
                flex 1
                font-size 16px

</style>

<script>

    import chart1 from './component/chart1.vue'
    import chart2 from './component/chart2.vue'
    import example01 from './examples/01-default.vue'
    import Swiper from 'swiper'
    import Tool from './../../common/tool'

    export default {
        data() {
            return {}
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container');
            Tool.$('month').onclick = () => {
                mySwiper.slideTo(0);
            }
            Tool.$('year').onclick = () => {
                mySwiper.slideTo(1);
            }
        },
        components: {
            chart1,
            chart2,
            example01
        }
    }
</script>
