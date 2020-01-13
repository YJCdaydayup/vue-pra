<template>
  <div>
    <router-view class="app"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

  * {
    padding: 0;
    margin: 0;
  }

.app {
  position: absolute;
  top: 0;
  left: 0;
  top: 0;
  bottom: -10px;
  background-color: yellowgreen
}

</style>
