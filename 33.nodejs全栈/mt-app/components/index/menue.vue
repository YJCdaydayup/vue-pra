<template>
    <div class="m-menu">
      <dl class="nav" @mouseleave="mouseleave">
        <dt>全部分类</dt>
        <dd v-for="(item, index) in $store.state.home.menu" :key="index" @mouseenter="mouseenter">
          <i :class="item.type"/> {{item.name}} <span class="arrow"/>
        </dd>
      </dl>
      <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
        <template v-for="(item, idx) in curdetail.child">
          <h4 :key="idx">{{item.title}}</h4>
          <span v-for="(v, index) in item.child" :key="index">{{v}}</span>
        </template>
      </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">

  .m-menu {
    position: relative;
    top: 160px;
  }

  .detail {
    position: relative;
    top: -10px;
  }

</style>

<script>
    export default {
        data() {
            return {
                kind:'food',
                menue: [
                  {
                    type: 'food',
                    name: '美食',
                    child: [
                      {
                        title: '美食',
                        child: [
                          '代金券','甜点','饮品','火锅','小食拼盘'
                        ]
                      }
                    ]
                  },
                  {
                    type: 'takeout',
                    name: '外卖',
                    child: [
                      {
                        title: '外卖',
                        child: ['美团外卖']
                      }
                    ]
                  },
                  {
                    type: 'hotel',
                    name: '酒店',
                    child: [
                      {
                        title: '酒店星级',
                        child: [
                          '经济型',
                          '舒适／三星',
                          '高档／四星',
                          '豪华／五星'
                        ]
                      },
                      {
                        title: '酒店星级',
                        child: [
                          '经济型',
                          '舒适／三星',
                          '高档／四星',
                          '豪华／五星'
                        ]
                      }
                    ]
                  }
                ]
            }
        },
        computed: {
          curdetail() {
            console.log(this.$store.state.home.menu.filter((item)=>item.type === this.kind)[0])
            return this.$store.state.home.menu.filter((item)=>item.type === this.kind)[0]
          }
        },
        methods: {
          mouseleave() {
            this._timer = setTimeout(()=>{
              this.kind = ''
            },150);
          },
          mouseenter(e) {
            this.kind = e.target.querySelector('i').className;
            console.log(this.kind)
          },
          sover() {
            clearTimeout(this._timer);
          },
          sout() {
            this._timer = setTimeout(()=>{
              this.kind = ''
            },150);
          }
        }
    }
</script>


