<template>
  <div class="box">
    <button @click="test1($event)">派发事件</button>
    <span>{{mulState}}</span>
  </div>
</template>

<script>

  import {mapState} from 'vuex'

  export default {
    data() {
      return {

      }
    },
    computed: {
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
        console.log(e)
        e.target.setAttribute("disabled", true);
        this.$store.dispatch('action1', {
          len: 1
        }).then(()=>{
          console.log('成功提交actions');
        })
      }
    }
  }

</script>
