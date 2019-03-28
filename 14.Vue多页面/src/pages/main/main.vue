<template>
    <div class="box">
       <div>
           <button class="btn" @click.prevent.stop="showSdxpp">投资确认书</button>
           <button class="btn" @click.prevent.stop="showFxjs">风险警示</button>
       </div>
        <SDXPP v-show="showSDXPP"></SDXPP>
        <FXJS v-show="showFXJS"></FXJS>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .box
        position: absolute;
        background-color: #ddd
        left: 0
        top: 0
        right: 0
        bottom: 0
        display: flex
        justify-content: center
        align-items: center
        .btn
            display: block
            width: 100px
            padding 5px 10px
            background-color: antiquewhite
            border-radius: 3px

</style>

<script>

    import SDXPP from '../../component/sdxpp.vue'
    import FXJS from '../../component/fxjs.vue'

    export default {
        data() {
            return {
                showSDXPP: false,
                showFXJS: false
            }
        },
        methods: {
            showSdxpp() {
                this.showSDXPP = true;
            },
            showFxjs() {
                this.showFXJS = true;
            }
        },
        components: {
            SDXPP,
            FXJS
        }
    }

</script>
