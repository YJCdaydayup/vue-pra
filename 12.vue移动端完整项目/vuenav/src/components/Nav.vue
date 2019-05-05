<template lang="html">
  <div class="nav">
    <ul>
      <router-link tag="li" to="/home">
        <i class="icon el-icon-s-home"></i>
        <span class="title">Home</span></router-link>
      <router-link tag="li" to="/order">
        <i class="icon el-icon-document"></i>
        <span class="title">Order</span>
        </router-link>
      <router-link tag="li" to="/shopcar">
        <i class="icon el-icon-truck"></i>
        <span class="title">ShopCar</span>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="icon el-icon-user-solid"></i>
        <span class="title">Mine</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
  }

  .nav ul {
    display: flex;
    padding: 0;
    margin: 0;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid rgba(29,29,29,0.2);
  }

  .nav ul li {
    list-style-type: none;
    flex: 1;
    text-align: center;
    border-left: 1px solid rgba(29,29,29,0.2);
    display: flex;
    flex-direction: column;
  }

  .nav ul li.active {
    color: red;
  }

  .nav ul li.active .icon{
    color: red;
  }

  .nav ul li:first-child {
    border: none;
  }

  .icon {
    color: gray;
    font-size: 22px;
    flex: 1;
    margin-top: 6px;
  }

  .title {
    font-size: 12px;
    font-weight: 600;
    position: relative;
    bottom: 15px;
  }



</style>
