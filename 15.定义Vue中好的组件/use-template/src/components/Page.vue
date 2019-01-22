<template>
  <div class="page-box">
    <div class="anione-wrapper">
      <anithree></anithree>
    </div>
  </div>
</template>

<style>

</style>

<script>

  import anione from './anione/anione.vue'
  import anitwo from './anione/anitwo.vue'
  import anithree from './anione/anithree.vue'

export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    anione,
    anitwo,
    anithree
  }
}
</script>
