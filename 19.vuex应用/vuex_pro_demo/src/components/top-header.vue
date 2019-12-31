<template>
    <div class="header-container" ref="headerContainer">
        <ul class="item-box" ref="itemBox">
            <li @click="selectMenu($event,index)" class="item" v-for="(item,index) in items" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    * 
        padding 0
        margin 0

    ul 
        list-style-type none

    .header-container 
        position absolute
        top 0
        left 0
        right 0
        height 44px
        line-height 44px
        background-color #abcabc
        overflow: hidden
        .item-box
            display flex
            .item
                width: 80px
                text-align center
                margin-left 3px
                background-color #ccc


</style>

<script>

import BScroll from 'better-scroll'

export default {
    data() {
        return {
            items: [
                '首页',
                '行情',
                '商城',
                '交易',
                '关于我',
                '其他',
                '首页',
                '行情',
                '商城',
                '交易',
                '关于我',
                '其他'
            ]
        }
    },
    mounted() {
        let picWidth = 80;
        let margin = 3;
        let width = (picWidth + margin) * (this.items.length-1);
        this.$refs.itemBox.style.width = width + 'px';
        this.$nextTick(() => {
              this.picScroll = new BScroll(this.$refs.headerContainer, {
                scrollX: true,
                probeType: 3,
                eventPassthrough: 'vertical',
                click: true
              })
              this.picScroll.on('scroll', function (obj) {
                  console.log(obj);
              })
        })
    },
    methods: {
        selectMenu(event,index) {
            if (!event._constructed) {
                return;
            }
            console.log(index)
        }
    }
}
</script>