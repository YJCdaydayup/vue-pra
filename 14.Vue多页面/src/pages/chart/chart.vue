<template>
    <div class="container">
        <div class="nav">
            <div id="month" class="preBtn">本月</div>
            <div id="year" class="nextBtn">本年</div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <chart1 ref="chart1"></chart1>
                </div>
                <div class="swiper-slide">
                    <chart2 ref="chart2"></chart2>
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
            return {
                currentIndex: 0
            }
        },
        mounted() {
            var self = this;
            this.mySwiper = new Swiper('.swiper-container',{
                on: {
                    slideChangeTransitionEnd: function(){
//                        alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                        if (this.activeIndex === 0) {
                            self.$refs.chart1.getData();
                        }else {
                            self.$refs.chart2.getData();
                        }
                    },
                },
            });
            Tool.$('month').onclick = () => {
                this.mySwiper.slideTo(0);
                let {activeIndex} = this.mySwiper;
                if (activeIndex !== this.currentIndex) {
                    this.$refs.chart1.getData();
                }
                this.currentIndex = 0;
            }
            Tool.$('year').onclick = () => {
                this.mySwiper.slideTo(1);
                let {activeIndex} = this.mySwiper;
                if (activeIndex !== this.currentIndex) {
                    this.$refs.chart2.getData();
                }
                this.currentIndex = 1;
            }
        },
        computed: {

        },
        components: {
            chart1,
            chart2,
            example01
        }
    }
</script>
