<template>
    <div v-if="module.child.length" class="i-select">
        <dl>
          <dt>{{module.title}}</dt>
          <dd :class="{itemborad: module.child.length <= 2}">
            <span :class="{selected: item.selected}" v-for="(item, index) in module.child" :key="index"><span>{{item.title}}</span></span>
          </dd>
        </dl>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .i-select
    position absolute
    top 116%
    display none
    padding 20px 20px 0 20px
    background-color #fff
    border-radius 3px
    z-index 10
    box-shadow 6px 3px 10px 1px #ccc
    dl
      >dt
        font-size 16px
        color #ccc
        margin-bottom 6px
      >dd
        width 400px
        &.itemborad
          width 200px
        >span
          display inline-block
          width 100px
          font-size 12px
          margin-bottom 20px
          position relative
          >span
            position absolute
            background-color #e8be43
            padding 2px 6px
            border-radius 10px






</style>

<script>
    export default {
        props: {
          module: {
            type: Object,
            default() {
              return {
                title: '',
                child: []
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


