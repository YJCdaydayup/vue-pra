<template>
  <div>

    <!-- 安装一个vue组件方便调试 -->
    <nav-header></nav-header>

    <!-- 带插槽了组件 -->
    <nav-bread>
      <!-- 组件里面留<slot></slot>，这里直接填写新内容如下即可 -->
      <span>商城</span>

      <!-- 指定内容写在哪个插槽下 -->
      <span slot="bread">我是面包屑</span>
      <span slot="test">我来测试一下</span>

    </nav-bread>

    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a @click="sortGoods" href="javascript:void(0)" class="price">
            Price
            <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter" id="filter" :class="filterObj">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a href="javascript:void(0)" :class="{cur: priceChecked=='all'}" @click="setPriceFilter('all')">All</a>
              </dd>
              <dd v-for="(price,index) in goodsPrices" @click="setPriceFilter(index)">
                <a :class="{cur:priceChecked==index}" href="javascript:void(0)">{{price.minPrice + ' - ' + price.maxPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodsList">
                  <div class="pic">
                    <!-- v-bind绑定后，等号后面都是表达式了，如果使用字符串需要用单引号 -->
                    <a href="#"><img v-lazy="'../../static/' + item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车{{item.productImg}}</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
                加载中，在这里可以添加loading加载框更好
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
    <nav-footer></nav-footer>

  </div>
</template>

<!--<style>-->
  <!---->
<!--</style>-->

<script>

  // 引入css文件
    import './../assets/css/base.css'
    import './../assets/css/product.css'
    import './../assets/css/login.css'

    import NavHeader from '../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    import NavBread from  './../components/NavBread'
//    import axios from './../../node_modules/axios/dist/axios'
  // nodemoudle里面的插件这里不需要我们做路径了，默认会去找了
    import axios from  "axios"

    export default {
    // 组件里面的data都是函数，保证状态是独立的
        data() {
        return {
          goodsList: [],
          goodsPrices:[
            {
              minPrice: 0,
              maxPrice: 200
            },
            {
              minPrice: 200,
              maxPrice: 600
            },
            {
              minPrice: 600,
              maxPrice: 1000
            },
            {
              minPrice: 1000,
              maxPrice: 1500
            }
          ],
          priceChecked: 'all',
          filterObj : {
            "filterby-show": false
          },
          overLayFlag: false,
          sortFlag: true,
          page: 1,
          pageSize: 8,
          budy: false
        }
      },
      components: {
          NavHeader,
          NavFooter,
          NavBread
      },
      mounted: function () {
        this.getGoodsList();
      },
      methods: {
        // 这里的方法可以这样写
        // localhost:3000 已经跨域了，axios不支持跨域，需要做一个代理，
        // 在config/index.js下找到proxyTable:{'/goods':{target: 'http://localhost:3000'},方便做转发
        // 当我们访问'/goods'时，默认转发到http://localhost:3000里面去找
        // 这个只限于开发模式，部署的时候一定要和服务器部署到一起才能访问到
        getGoodsList(flag){
          var param = {
            page: this.page,
            pageSize: this.pageSize,
            sort: this.sortFlag? 1 : -1
          };
          axios.get("/goods",{
            params: param
          }).then((res) => {
            if (res.data.status == '0') {
              if (flag) {
                // 如果是true，就说明是下拉加载的，数据要累加
                this.goodsList = this.goodsList.concat(res.data.result.list);
                // 数据全部拿到后，禁止滚动加载
                if (res.data.result.length < this.pageSize) {
                  this.busy = true;
                }else {
                  this.busy = false;
                }
              }else  {
                this.goodsList = res.data.result.list;
              }
            }else {
              this.goodsList = [];
            }
          });
        },

        sortGoods() {
          this.sortFlag = !this.sortFlag;
          this.page = 1;
          this.getGoodsList();
        },

        showFilterPop(){
          this.filterObj["filterby-show"] = true;
          this.overLayFlag = true;
        },
        closePop(){
          this.filterObj["filterby-show"] = false;
          this.overLayFlag = false;
        },
        setPriceFilter(ev){
          this.priceChecked = ev;
          this.closePop();
        },
        loadMore() {
//          alert('loading more');
          this.busy = true;
          // 防止代码无止尽加载
          setTimeout(() => {
            this.page ++;
            this.getGoodsList(true);
          }, 500);
        }
      }
    }
</script>


