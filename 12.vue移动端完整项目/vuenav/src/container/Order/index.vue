<template lang="html">
  <div class="order">
    <div class="navs">
      <div :class="!showTopNav?'logo-center':''" class="logo">
        <i class="el-icon-message"></i>
        <span style="font-family: 'American Typewriter'">Letter</span>
      </div>
      <div v-if="showTopNav" class="list">
        <div :class="changeMargin" v-for="item in menuData" class="li-c" @click.stop="clickNavLi($event, item)">
          <span>{{item.title}}</span>
          <ul class="child_control" v-if="item.isSubShow">
            <li v-for="child in item.childs" class="child_cls">
              {{child.title}}
            </li>
          </ul>
        </div>
      </div>
      <div :class="!showTopNav?'no_input': ''" class="search">
        <input class="input" type="text" placeholder="请输入关键字进行搜索">
        <i class="el-icon-search"></i>
        <div class="line"></div>
      </div>
    </div>
    <transition name="move">
      <div class="aside-nav" v-if="!showTopNav">
        <i class="book el-icon-search"></i>
        <div class="alis">
            <div v-for="item in menuData" class="li_ext">
              <span>{{item.title}}</span>
              <ul class="v-child_control">
                <li v-for="child in item.childs" class="child_cls">
                  {{child.title}}
                </li>
              </ul>
            </div>
        </div>
      </div>
    </transition>
    <Nav></Nav>
  </div>
</template>
<style scoped>
  .order .navs {
    background-color: black;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navs .logo {
    position: absolute;
    top: 2%;
    left: 5%;
    color: aquamarine;
    transition: all 0.5s linear;
    font-size: 24px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .navs .logo-center {
    left: 40%;
  }

  .li-c {
    cursor: pointer;
    display: inline-block;
    color: white;
    font-size: 6px;
    margin-left: 6px;
    opacity: 0.8;
    transition: all 0.3s linear;
    padding: 0 10px;
    position: relative;
  }

  .li-c .child_control {
    position: absolute;
    top: 100%;
    background-color: black;
    width: 100%;
    left: 0;
    text-align: center;
    font-size: 14px;
    opacity: 0.8;
  }

  .child_cls:hover {
    background-color: red;
  }

  .li-c:active {
    background-color: aquamarine;
  }

  .list .change_margin {
    margin-left: 40px;
    font-size: 16px;
  }

  .search {
    position: absolute;
    right: 5%;
    top: 10%;
    color: white;
    font-weight: bolder;
    font-size: 0;
  }

  .no_input .input {
    display: none;
  }

  .no_input .line {
    display: none;
  }

  .search i {
    font-size: 18px;
    vertical-align: center;
    margin-left: 3px;
    position: relative;
    top: 2px;
    opacity: 0.6;
  }

  .search .input {
    background-color: black;
    border: none;
    vertical-align: center;
    font-size: 14px;
  }

  .search .line {
    width: 100%;
    height: 1px;
    background-color: white;
    opacity: 0.6;
    position: relative;
    top: -16px;
  }

  .aside-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    bottom: 0;
    background-color: black;
    color: white;
    box-sizing: border-box;
    padding-top: 15px;
    transition: all 0.5s linear;
    transform: translate3d(0, 0, 0);
    margin: 0;
  }

  .move-enter, .move-leave-to {
    transform: translate3d(-100%, 0, 0);
  }

  .aside-nav .book {
    font-size: 20px;
    margin-left: 45px;
  }

  .aside-nav .alis {
    margin-top: 30px;
  }

  .aside-nav .alis .li_ext {
    cursor: pointer;
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }

  .aside-nav .alis .li_ext:hover {
    background-color: aquamarine;
    color: black;
    opacity: 0.8;
  }

  .v-child_control {
    margin-top: 10px;
  }

  .v-child_control .child_cls {
    padding: 10px 0;
  }

  .v-child_control .child_cls:hover {
    background-color: antiquewhite;
  }



</style>

<script>
  import Nav from './../../components/Nav.vue'

  export default {
    data() {
      return {
        menuData: [
          {
            title: "一级菜单",
            icon: "el-icon-message",
            // path:'',
            classShow: true,
            bigshowclass: false,
            isSubShow: false,
          },
          {
            icon: "el-icon-message",
            title: "两级菜单",
            bigshowclass: false,
            isSubShow: false,
            childs: [
              {
                icon: "el-icon-loading",
                title: "权限管理",
                path: '',
                showclass: false,
              },
              {
                icon: "el-icon-bell",
                title: "角色管理",
                path: '',
                showclass: false,
              }
            ]
          },
          {
            icon: "el-icon-news",
            title: "三级菜单",
            bigshowclass: false,
            isSubShow: false,
          },
          {
            icon: "el-icon-news",
            title: "四级菜单",
            isSubShow: false,
            bigshowclass: false,
            childs: [
              {
                icon: "el-icon-phone-outline\r\n",
                title: "帐号管理",
                path: '',
                showclass: false,
              },
              {
                icon: "el-icon-picture",
                title: "积分管理",
                path: '',
                showclass: false,
              }
            ]
          },
          {
            icon: "el-icon-news",
            title: "五级菜单",
            bigshowclass: false,
            isSubShow: false,
          },
          {
            icon: "el-icon-news",
            title: "六级菜单",
            bigshowclass: false,
            isSubShow: false,
          },
        ],
        showTopNav: true,
        changeMargin: '',
      }
    },
    mounted() {
      this.listenWindow();
      window.addEventListener('resize', this.listenWindow)
      window.onclick = ()=>{
        this.menuData.forEach((child, index) => {
          child.isSubShow = false;
        })
      }
    },
    computed: {
      logoCenter() {
        if (!this.showTopNav) {
          return 'logo-center'
        } else {
          return '';
        }
      }
    },
    methods: {
      listenWindow() {
        let windowWidth = document.body.clientWidth;
        this.showTopNav = windowWidth >= 768;
        if (windowWidth > 900) {
          this.changeMargin = 'change_margin';
        } else {
          this.changeMargin = '';
        }
      },
      clickNavLi(event, item) {
        this.menuData.forEach((child, index) => {
          child.isSubShow = false;
        })
        item.isSubShow = true;
      }
    },
    components: {
      Nav
    }
  }
</script>


