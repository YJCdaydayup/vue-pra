<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{count}}</span>
    <span>{{countPlusLocalState}}</span>
    <div>{{mapCount}}</div>
    <button class="btn" :class="addBtnClass" @click="addCount">Add</button>
    <!--<hr>-->
    <div>{{getVal}}</div>
    <ul>
      <li style="color: red" v-for="item in getVal">{{item.text}}</li>
    </ul>
    <div href="#">{{todoCount}}</div>
    <a href="">{{doneTodoCount}}</a>
    <button style="width: 50px;height: 50px" @click="addMutaion">ADD</button>

    <button @click="dispatchAction" style="width: 80px;height: 80px;background-color: palevioletred">派发actions</button>
  </div>
</template>

<script>

  import {mapState, mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'Counter',
    data() {
      return {
        msg: "Counter组件",
        localCount: 8
      }
    },
    computed: {
      count() {
        return this.$store.state.count
      },
      addBtnClass() {
        if (this.count > 6) {
          return 'more-class'
        } else if (this.count < 10 && this.count > 6) {
          return 'less-class'
        } else {
          return 'normal'
        }
      },
      ...mapState({
        // 1.可以直接使用箭头函数，参数为state
        mapCount: state => state.count,
        // 2.可以直接使用ES6函数，参数为state
        countPlusLocalState(state) {
          return state.count + this.localCount;
        },
        getVal(state) {
          return this.$store.getters.doneTodos;
        },
        todoCount(state) {
          return this.$store.getters.doneTodoCount;
        },
        ...mapGetters([
          'doneTodoCount'
        ])
      })
    },
    methods: {
      addCount() {
        this.$store.commit('increment', {
          len: 2
        });
      },
      addMutaion() {
        this.$store.commit(`ADD_MUTATION`)
      },
      ...mapMutations([
        'increment'
      ]),
      dispatchAction() {
        this.$store.dispatch('checkout',{
          len: 6
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hello {
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: green;
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
  }

  .btn {
    display: block;
    width: 100px;
    height: 50px;
    border: 1px solid palegreen;
    transition: all 1s;
    opacity: 1;
  }

  .normal {
    transform: translate3d(0, 0, 0) rotate(360deg);
  }

  .less-class {
    background-color: orange;
  }

  .more-class {
    background-color: seagreen;
    border-radius: 8px;
    transform: translate3d(0, -100%, 0) rotate(360deg);
  }

</style>
