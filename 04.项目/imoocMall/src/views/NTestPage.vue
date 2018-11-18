<template>
  <div>
    <input type="button" value="SHOW N-MODAL" @click="showModal">

    <nModal v-if="nShow" :nShow="nShow" @close="nShow=false">
      <span slot="title">您还没有登录呢</span>
      <span slot="btns">
        <button class="confirm-btn" @click="confirm">确认</button>
        <button class="cancel-btn" @click="cancel">取消</button>
      </span>
    </nModal>

    <nModal :nShow="nShow" @close="nShow=false">
      <span slot="title">您已经登录，还有新的消息未读哦</span>
      <span slot="btns">
        <button class="confirm-btn" @click="confirm">确认</button>
      </span>
    </nModal>
  </div>
</template>

<script>

  import './../assets/css/nStyle.css'

  import NModal from './../components/NModal'

  export default {
    data() {
      return {
        nShow: false,
        isLoading: true,
        content: '我是loading'
      }
    },
    components: {
      NModal
    },
    methods: {
      showModal() {
        this.nShow = true;
      },
      confirm() {
        this.nShow = false;
      },
      cancel() {
        this.nShow = false;
      }
    }
  }
</script>


