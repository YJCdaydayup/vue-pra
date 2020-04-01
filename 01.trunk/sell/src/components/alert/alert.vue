<template>
    <div class="alert-module" v-if="visible">
        <div class="alert-box">
            <span>{{msg}}</span>
        </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    
</style>

<script>
export default {
    data() {
        return {
            visible: false,
            msg: '加载中...'
        }
    }
}
</script>