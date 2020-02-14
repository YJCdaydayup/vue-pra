<template>
    <div class="page-cart">
      <el-row>
        <el-col class="m-cart" v-if="1" :span="24">
          <list :cartData="cart"/>
          <p>
            应付金额： <em class="money">¥{{total}}</em>
          </p>
          <div class="post">
            <el-button @click="submit" type="primary">提交订单</el-button>
          </div>
        </el-col>
        <el-col v-else :span="24" class="empty">
          购物车为空
        </el-col>
      </el-row>
    </div>
</template>

<style lang="scss">

  @import "@/assets/css/cart/index.scss";

</style>

<script>

  import List from '@/components/cart/list.vue'

    export default {
        layout: 'blank',
        data() {
            return {
                cart: ['123456hgfwhgwefgrhg']
            }
        },
        components: {
          List
        },
        computed: {
          total() {
            let total = 0
            this.cart.forEach(item => {
              total += item.price * item.count
            })
            return total
          }
        },
        methods: {
          submit: async function(){
            let {status,data:{code,id}}=await this.$axios.post('/order/createOrder',{
              count:this.cart[0].count,
              price:this.cart[0].price,
              id:this.cartNo
            })
            if(status==200&&code===0){
              this.$alert(`恭喜您，已成功下单，订单号:${id}`,'下单成功',{
                confirmButtonText:'确定',
                callback:action=>{
                  location.href='/order'
                }
              })
            }
          }
        },
      async asyncData(ctx){

        let {status,data:{code,data:{name,price}}}=await ctx.app.$axios.get('/cart/getCart',{
          params: {
            id: '8587c1647120399e17ce96fdd76d130a'
          }
        })

        if(status===200&&code===0&&name){
          return {
            cart:[{
              name,
              price,
              count: 1
            }],
            cartNo:ctx.query.id
          }
        }
      }
    }
</script>


