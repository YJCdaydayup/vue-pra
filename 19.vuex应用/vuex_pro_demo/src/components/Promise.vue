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
        console.log('发起事件');
        e.target.setAttribute("disabled", true);
        this.$store.dispatch('action1', {
          len: 1
        }).then((x)=>{
          console.log(x);
        })
      }
    }
  }

</script>
