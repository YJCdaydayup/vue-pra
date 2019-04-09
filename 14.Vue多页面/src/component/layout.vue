<template>
    <div class="layout">
        <div class="container">
            <div class="header" @click="add"></div>
            <div class="content">
                <div class="left" @click="pre">上一页</div>
                <div class="mid" @click="resetting">重置</div>
                <div class="right" @click="next">下一页</div>
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

    import Event from './../common/event'

    export default {
        data() {
            return {
                msg: 'layout',
                page: 0
            }
        },
        methods: {
            add() {
              this.page ++;
              this.$emit('add-ball',this.page);
            },
            pre() {
                this.page++;
                Event.$emit('pre', this.page);
            },
            resetting() {
                this.page = 10;
                Event.$emit('resetting', this.page);
            },
            next() {
                this.page--;
                Event.$emit('next', this.page);
            }
        }
    }
</script>
