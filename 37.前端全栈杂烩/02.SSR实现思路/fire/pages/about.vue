<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <dl>
          <dt>{{}}</dt>
          <dd v-for="(child, idx) in item.children" :key=""></dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // asyncData({ req }) {
  //   return {
  //     name: req ? 'server' : 'client'
  //   }
  // },
  // head() {
  //   return {
  //     title: `About Page (${this.name}-side)`
  //   }
  // }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
