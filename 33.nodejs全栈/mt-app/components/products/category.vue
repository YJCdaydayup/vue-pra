<template>
    <div class="m-category">
      <dl>
        <dt class="type">分类</dt>
        <dt class="all">全部</dt>
        <dd class="child">
          <span :class="{selected: item.selected}" v-for="(item, index) in categories" :key="index">
            <span>{{item.title}}</span>
            <iselect class="iselect" :module="item.module"/>
          </span>
        </dd>
      </dl>
      <dl>
        <dt class="type">区域</dt>
        <dt class="all">全部</dt>
        <dd class="child no-line">
          <span :class="{selected: item.selected}" v-for="(item, index) in areas" :key="index"><span>{{item.title}}</span></span>
        </dd>
      </dl>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .m-category
    width 1000px
    margin 80px auto
    border 1px solid #ccc
    border-radius 6px
    padding 20px
    padding-bottom 0
    font-size 14px
    >dl
      display flex

      &:last-child
        margin-top 20px

      .type
        flex 0 100px
        font-weight 600
      .all
        flex 0 100px

      .child
        flex 1
        border-bottom 1px solid #ccc
        padding-left 6px
        &.no-line
          border none
        >span
          cursor pointer
          position relative
          display inline-block
          width 100px
          &:hover
            .iselect
              display block
          &.selected
            &::after
              margin-left -16px
            >span
              background-color #e8be43
              padding 3.6px 22px 3.6px 10px
              border-radius 12px
          margin-bottom 14px
          &:last-child
            margin-bottom 20px
          &::after
            position absolute
            content ''
            border 4px solid gray
            border-color gray transparent transparent transparent
            top 36%
            margin-left 3px



</style>

<script>

  import iselect from '@/components/products/iselect.vue'

    export default {
        data() {
            return {
                categories: [
                  {
                    selected: true,
                    title: '美食',
                    module: {
                      title: "美食",
                      child: [
                        {
                          selected: true,
                          title: '全部'
                        },
                        {
                          selected: true,
                          title: '烤肉'
                        }
                      ]
                    }
                  },
                  {
                    selected: false,
                    title: '酒店住宿',
                    module: {
                      title: "美食",
                      child: [
                        {
                          selected: true,
                          title: '酒店住宿'
                        },
                        {
                          selected: true,
                          title: '烤肉'
                        },
                        {
                          selected: true,
                          title: '烤肉'
                        },
                        {
                          selected: true,
                          title: '烤肉'
                        },
                        {
                          selected: true,
                          title: '烤肉'
                        },
                        {
                          selected: true,
                          title: '烤肉'
                        }
                      ]
                    }
                  },
                  {
                    selected: false,
                    title: '休闲娱乐',
                    module: {
                      title: "美食",
                      child: [
                        {
                          selected: true,
                          title: '全部'
                        },
                        {
                          selected: true,
                          title: '烤肉'
                        }
                      ]
                    }
                  },
                  {
                    selected: false,
                    title: '汽车服务'
                  },
                  {
                    selected: false,
                    title: '家装'
                  },
                  {
                    selected: false,
                    title: '结婚'
                  },
                  {
                    selected: false,
                    title: '生活服务'
                  },
                  {
                    selected: false,
                    title: '宴会'
                  },
                  {
                    selected: false,
                    title: '榛果民宿'
                  },
                  {
                    selected: false,
                    title: '时尚购'
                  }
                ],
              areas: [
                {
                  selected: true,
                  title: '推荐商圈'
                },
                {
                  selected: false,
                  title: '密云区'
                },
                {
                  selected: false,
                  title: '朝阳区'
                },
                {
                  selected: false,
                  title: '昌平区'
                },
                {
                  selected: false,
                  title: '海淀区'
                },
                {
                  selected: false,
                  title: '延庆区'
                },
                {
                  selected: false,
                  title: '实景山区'
                },
                {
                  selected: false,
                  title: '闷头沟区'
                },
                {
                  selected: false,
                  title: '怀柔区'
                },
                {
                  selected: false,
                  title: '顺义区'
                }
              ]
            }
        },
        components: {
          iselect
        }
    }
</script>


