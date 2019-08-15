<template>
  <div class="home">
    <ul>
      <router-link tag="li" to="/home/hot">热门</router-link>
      <router-link tag="li" to="/home/recommand">推荐</router-link>
    </ul>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Nav/>
  </div>
</template>

<style scoped>

  .home {
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 50px;
    padding: 0 10px;
  }

  li.active {
    color: green;
  }

  ul {
    padding: 0;
    height: 50px;
    list-style-type: none;
    display: flex;
  }

  ul li {
    flex: 1;
    text-align: center;
  }

</style>

<script>

  import Nav from './../../components/Nav.vue'

  export default {
    data() {
      return {
        msg: "hello vue"
      }
    },
    components: {
      Nav
    }
  }
</script>


