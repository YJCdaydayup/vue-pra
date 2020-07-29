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
            <svg class="icon-arrow-short">
              <use xmlns:xlink="http://www.w3.org/1999/xhtml" xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
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
                <a :class="{cur:priceChecked==index}" href="javascript:void(0)">{{price.minPrice + ' - ' +
                  price.maxPrice}}</a>
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
                    <div @click="addCart(item.productId)" class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车{{item.productImg}}</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
                <img v-show="showLoading" src="../assets/loading-spinning-bubbles.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>

    <!-- 1.用于登录的模态框 -->
    <modal :mdShow="mdShow" @close="closeModal">
      <p slot="message">
        请先登录，否则无法加入购物车
      </p>
      <div slot="btnGroup">
        <!-- 通过插槽添加的元素，是属于父组件的元素，事件和属性正常去写 -->
        <a href="javascript:;" class="btn btn--m" @click="closeModal">关闭</a>
      </div>
    </modal>

    <!-- 2.用于加入购物车成功时的模态框 -->
    <modal :mdShow="mdShowCart" @close="closeModal">
      <p slot="message">
        <span>加入购物车成功</span>
      </p>
      <div slot="btnGroup">
        <!-- 通过插槽添加的元素，是属于父组件的元素，事件和属性正常去写 -->
        <a href="javascript:;" class="btn btn--m" @click="mdShowCart=false">继续购物</a>
        <router-link href="javascript:;" class="btn btn--m" to="/cart">查看购物车</router-link>
      </div>
    </modal>

    <nav-footer></nav-footer>

  </div>
</template>

<script>

  // 引入css文件
  import './../assets/css/base.css'
  import './../assets/css/product.css'
  import './../assets/css/login.css'

  import NavHeader from '../components/NavHeader'
  import NavFooter from './../components/NavFooter'
  import NavBread from  './../components/NavBread'
  import Modal from './../components/Modal'


  //    import axios from './../../node_modules/axios/dist/axios'
  // nodemoudle里面的插件这里不需要我们做路径了，默认会去找了
  import axios from  "axios"

  export default {
    // 组件里面的data都是函数，保证状态是独立的
    data() {
      return {
        goodsList: [],
        goodsPrices: [
          {
            minPrice: 0,
            maxPrice: 200
          },
          {
            minPrice: 200,
            maxPrice: 500
          },
          {
            minPrice: 500,
            maxPrice: 1000
          },
          {
            minPrice: 1000,
            maxPrice: 10000
          }
        ],
        priceChecked: 'all',
        filterObj: {
          "filterby-show": false
        },
        overLayFlag: false,
        sortFlag: true,
        page: 1,
        pageSize: 8,
        budy: false,
        showLoading: true,
        minPrice: 0,
        maxPrice: 0,
        mdShow: false,
        mdShowCart: false
      }
    },
    components: {
      NavHeader,
      NavFooter,
      NavBread,
      Modal
    },
    mounted: function () {
      // this.minPrice = 0;
      // this.maxPrice = this.goodsPrices[this.goodsPrices.length - 1].maxPrice;
      // this.getGoodsList();
      console.log('AAAAA')
      axios.post('http://172.23.1.196:8080/zzb/system/login', {
            "functionId": "login",
            "parameters": {
              "userId": "13751135038",
              "password": "ISGMyneATSuhkiwz4BURBQ==",
            }
      },{
          headers: {
              Authorization: 'Basic o5CZ976uIOA6l7dUl5KtoWggYYi4+v3VvRC7JtDby/I='
          }
      }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
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
          sort: this.sortFlag ? 1 : -1,
          minPrice: this.minPrice,
          maxPrice: this.maxPrice
        };
        axios.get("/goods/list", {
          params: param
        }).then((res) => {
          if (res.data.status == '0') {
            if (flag) {
              // 如果是true，就说明是下拉加载的，数据要累加
              this.goodsList = this.goodsList.concat(res.data.result.list);
              // 数据全部拿到后，禁止滚动加载
            } else {
              this.goodsList = res.data.result.list;
            }
            if (res.data.result.list.length < this.pageSize) {
              this.busy = true;
              this.showLoading = false;
            } else {
              this.busy = false;
              this.showLoading = true;
            }
          } else {
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
        this.page = 1;
        // 过滤查找
        this.minPrice = ev == "all" ? 0 : this.goodsPrices[ev].minPrice;
        this.maxPrice = ev == 'all' ? this.goodsPrices[this.goodsPrices.length - 1].maxPrice : this.goodsPrices[ev].maxPrice;
        this.getGoodsList();
      },
      loadMore() {
        this.busy = true;
        // 防止代码无止尽加载
        setTimeout(() => {
          this.page++;
          this.getGoodsList(true);
        }, 500);
      },
      addCart(productId) {
        axios.post('/goods/addCart',{
          productId: productId
        }).then((res)=>{
          console.log(res.data);
          if (res.data.status == '0') {
            this.mdShowCart = true;
            this.$store.commit('updateCartCount',1);
          }else {
            this.mdShow = true;
          }
        });
      },
      closeModal(){
        this.mdShow = false;
      }
    }
  }
</script>


