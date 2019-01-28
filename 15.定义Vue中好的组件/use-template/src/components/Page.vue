<template>
  <div class="page-box">
    <div class="anione-wrapper">
      <anifour></anifour>
    </div>
  </div>
</template>

<style>

</style>

<script>

  import anifour from './anione/anifour.vue'

export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    anifour
  }
}
</script>
