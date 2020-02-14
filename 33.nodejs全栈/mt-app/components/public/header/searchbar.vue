<template>
    <div class="search-panel">
      <el-row class="m-header-searchbar">
        <el-col :span="3" class="left">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="">
        </el-col>
        <el-col :span="14" class="center">
          <div class="wrapper">
            <el-input @input="input" @blur="blur" @focus="focus" v-model="search" placeholder="搜索商家和地点"/>
            <button @click="searches" class="el-button el-button--primary"><i class="el-icon-search"></i></button>
            <dl class="hotPlace" v-if="isHotPlace">
              <dt>热门搜索</dt>
              <dd @click="click(item.name)" v-for="(item, index) in $store.state.home.hotPlace.slice(0, 5)" :key="index">{{item.name}}</dd>
            </dl>
            <dl class="searchList" v-if="isSearchList">
              <dd @click="click(item.name)" v-for="(item, index) in searchList" :key="index">{{item.name}}</dd>
            </dl>
          </div>
          <p class="suggest">
            <a @click="click(item.name)" v-for="(item, index) in $store.state.home.hotPlace.slice(0, 5)" :key="index">{{item.name}}</a>
          </p>
          <ul class="nav">
            <li>
              <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="apartment">民俗公寓</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="business">商家入驻</nuxt-link>
            </li>
          </ul>
        </el-col>
        <el-col :span="4" class="right myright">
          <ul class="security">
            <li><i class="refund"><p class="txt">随时退</p></i></li>
            <li><i class="single"><p class="txt">不满意免单</p></i></li>
            <li><i class="overdue"><p class="txt">过期退</p></i></li>
          </ul>
        </el-col>
      </el-row>
    </div>
</template>

<style lang="scss">

</style>

<script>

  import _ from 'lodash'

    export default {
        data() {
            return {
                isFocus: false,
                search: '',
                hotPlace: ['火锅','麻辣香锅','宫保鸡丁'],
                searchList: []
            }
        },
        computed: {
          isHotPlace() {
            return this.isFocus && !this.search;
          },
          isSearchList() {
            return this.isFocus && this.search;
          }
        },
        methods: {
          searches() {
            this.$router.push({
              path: '/product',
              query: {
                keyword: this.search
              }
            })
          },
          click(e) {
            this.search = e
          },
          focus() {
            this.isFocus = true;
          },
          blur() {
            let self = this;
            // 防止点击后先触发面板隐藏导致点击无效
            setTimeout(()=>{
              this.isFocus = false;
            },200);
          },
          input:_.debounce(async function(){
            let self=this;
            let city = self.$store.state.geo.position.city.replace('市','')
            self.searchList=[]
            let {status,data:{top}}=await self.$axios.get('/search/top',{
              params: {
                input:self.search,
                city: '三亚'
              }
            })
            if (status === 200) {
              if (top.length > 10) {
                self.searchList=top.slice(0,10)
              }else {
                self.searchList = top;
                console.log(self.searchList)
              }
            }
          },300)
        }
    }
</script>


