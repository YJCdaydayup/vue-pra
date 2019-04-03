<template>
    <div class="layout">
        <div class="container">
            <div class="header"></div>
            <div class="content">
                <div class="left"></div>
                <div class="mid"></div>
                <div class="right"></div>
            </div>
            <div class="footer"></div>
        </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">

    $HEIGHT = 36px

    .layout
        .container
            width 90%
            margin 30px auto
            .header
                width 100%
                height: $HEIGHT
                background-color palegreen
            .content
                display flex
                width 100%
                height 100px
                .left
                    flex: 1
                    background-color lightcoral
                .mid
                    flex: 1
                    background-color seagreen
                .right
                    flex: 1
                    background-color orange
            .footer
                width 100%
                height: $HEIGHT
                background-color red


</style>

<script>
    export default {
        data() {
            return {
                msg: 'layout'
            }
        }
    }
</script>
