<template>
  <div class="lan-box">
    <button @click="changeLanguage">中英文切换</button>
    <div class="content">
      <span>{{msg}}</span>
    </div>
    <div>{{msg1}}</div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .lan-box
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    display flex
    flex-direction column
    justify-content center
    align-items center
    >button
      border none
      padding 20px 30px
      background-color #2db3a6
      color #fff6df
      font-size 20px
      font-weight 600
      outline none
    .content
      padding 60px 100px
      background-color lavender
      border-radius 10px

</style>

<script>

  import translate, {LANGUAGE} from './../common/translate_conf'

  export default {
    layout: 'blank',
    data() {
      return {
        msg: '',
        msg1: '',
        state: 'CH'
      }
    },
    mounted() {
      let self = this
      self.startChange()
    },
    methods: {
     async startChange() {
        let self = this
        this.state = localStorage.getItem(LANGUAGE)
        this.msg = translate.get_flag1(self.state)
        this.msg1 = translate.get_flag2(self.state)
      },
      changeLanguage() {
        let self = this
        let value = localStorage.getItem(LANGUAGE);
        if(value === "EN"){
          localStorage.setItem(LANGUAGE, "CH");
        }else{
          localStorage.setItem(LANGUAGE, "EN");
        }
        self.startChange()
      }
    }
  }

</script>
