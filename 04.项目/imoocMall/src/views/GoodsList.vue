<template>
  <div>

    <!-- 安装一个vue组件方便调试 -->
    <nav-header></nav-header>

    <!-- 带插槽了组件 -->
    <nav-bread>
      <!-- 组件里面留<slot></slot>，这里直接填写新内容如下即可 -->
      <!--<span>商城</span>-->

      <!-- 指定内容写在哪个插槽下 -->
      <span slot="bread">我是面包屑</span>
      <span slot="test">我来测试一下</span>


    </nav-bread>

    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)">All</a></dd>
              <dd>
                <a href="javascript:void(0)">0 - 100</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">100 - 500</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">500 - 1000</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">1000 - 2000</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li>
                  <div class="pic">
                    <a href="#"><img src="static/1.jpg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">999</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <a href="#"><img src="static/2.jpg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">1000</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <a href="#"><img src="static/3.jpg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">500</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <a href="#"><img src="static/4.jpg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">2499</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

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


    import NavHeader from '../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    import NavBread from  './../components/NavBread'

    export default {
        data() {
            return {
                msg: "hello vue"
            }
        },
      components: {
          NavHeader,
          NavFooter,
          NavBread
      }

    }
</script>


