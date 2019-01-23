<template>
    <div class="ratingselect">
        <div class="rating-type border-1px">
          <span>{{desc.all}}</span>
          <span>{{desc.positive}}</span>
          <span>{{desc.negative}}</span>
        </div>
        <div class="switch">
          <span class="icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">

  @import "./../../common/stylus/mixin.styl"

  .ratingselect
    .rating-type
      padding: 18px
      margin: 0 18px
      border-1px(rgba(7,17,27,0.1))



</style>

<script>

    const POSITIVR = 0;
    const NEGATIVE = 1;
    const ALL = 2;

    export default {
        props: {
          ratings: {
            type: Array,
            default() {
              return [];
            }
          },
          selectType: {
            type: Number,
            default: ALL
          },
          onlyContent: {
            type: Boolean,
            default: false
          },
          desc: {
            type: Object,
            default() {
              return {
                all: '全部',
                positive: '满意',
                negative: '不满意'
              }
            }
          }
        },
        data() {
            return {
                msg: "hello vue"
            }
        },
        components: {}
    }
</script>


