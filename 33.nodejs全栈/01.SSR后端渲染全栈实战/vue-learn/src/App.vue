<template>
  <div id="app">
    <!--<h3 v-n="4"></h3>-->
    <!--<page-a></page-a>-->
    <!--<page-b></page-b>-->
    <page-c></page-c>
  </div>
</template>

<script>

import './components/directive';
//import PageA from './components/a.vue'
//import PageB from './components/b.vue'
import PageC from './components/c.vue'

export default {
  name: 'app',
  components: {
    PageC
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
