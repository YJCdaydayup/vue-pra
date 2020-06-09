<template>
    <div class="box">
        {{msg}}
        <child-bind @do-change="change" :meta="des"/>
        <!-- <child-bind :meta.sync="des"/> -->
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .box 
        width 100px
        height 100px
</style>

<script>

import ChildBind from './child-bind'

export default {

    data() {
        return {
            msg: '123',
            des: "sajcnakjca"
        }
    },
    components: {
        ChildBind
    },
    methods: {
        change(e) {
            this.des = e
        }
    }
}
</script>


