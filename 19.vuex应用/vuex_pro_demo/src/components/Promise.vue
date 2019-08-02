<template>
  <div style="position: relative" class="box">
    <button @click="test1($event)">派发事件</button>
    <span>{{mulState}}</span>

    <!-- 监听对象 -->
    <button @click="changeVal($event)">改变数据对象</button>
  </div>
</template>

<script>

  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        haoroomsObj: {
          haoroomstestinner: {
            a: '我是haorooms资源库',
            b: '我是haorooms博客'
          }
        }
      }
    },
    watch: {
      newHaorooms: {
        handler: (val, olVal) => {
          console.log('我变化了', val, olVal)
          console.log(this.show())
        },
        deep: true
      }
    },
    computed: {
      newHaorooms() {
        return this.haoroomsObj
      },
      ...mapState({
        myState: (state) => {
          return state.count
        }
      }),
      mulState() {
        return this.$store.getters.mulState;
      }
    },
    methods: {
      test1(e) {
        console.log('发起事件');
        e.target.setAttribute("disabled", true);
        this.$store.dispatch('action1', {
          len: 1
        }).then((x) => {
          console.log(x);
        })
      },
      changeVal(e) {
        this.haoroomsObj.haoroomstestinner.a = Math.random()
      },
      show() {
        alert(123)
      }
    }
  }

</script>
