<template>
    <transition name="move">
        <div class="stick_box">
            <div class="content">
                <div class="title">TITLETITLETITLE</div>
                <div>{{content}}</div>
            </div>
            <div class="footer" @click="back">
                <div class="round"><span class="simble">x</span></div>
            </div>
        </div>
    </transition>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .stick_box
        position absolute
        top: 0
        left: 0
        right: 0
        background-color rgba(29, 29, 29, 0.8)
        padding 10px 0 100px 0
        color: white
        font-size 0
        min-height 100%
        transition all 0.5s linear
        transform translate3d(0, 0, 0)
        &.move-enter, &.move-leave-to
            transform: translate3d(100%,0,0)
        .content
            padding 0 15px
            font-size 16px
            text-indent 2em
            text-align left
            .title
                text-align center
                font-weight: bold
                color: red
        .footer
            position absolute
            bottom 20px
            width 100%
            text-align center
            .round
                display inline-block
                width 45px
                height 45px
                line-height 45px
                border 2px solid red
                border-radius 22.5px
                .simble
                    position relative
                    top -5px
                    font-size 40px
                    color red


</style>

<script>

    export default {
        props: {
            content: {
                type: String,
                default() {
                    return '如我们需要果，想到的是给其设置一个透明度，并添加模糊滤效果，首先想到的是给其设置一个透明度，并添加模糊滤镜比如我们需要将上图中页面中间的文字区域变成毛玻璃效果，首先想到的是给其设置一个透明度，并添加模糊滤镜\n' +
                        '                    return \'如我们需要果，想到的是给其设置一个透明度，并添加模糊滤效果，首先想到的是给其设置一个透明度，并添加模糊滤镜比如我们需要将上图中页面中间的文字区域变成毛玻璃效果，首先想到的是给其设置一个透明度，并添加模糊滤镜\n' +
                        '                    return \'如我们需要果，想到的是给其设置一个透明度，并添加模糊滤效果，首先想到的是给其设置一个透明度，并添加模糊滤镜比如我们需要将上图中页面中间的文字区域变成毛玻璃效果，首先想到的是给其设置一个透明度，并添加模糊滤镜\n' +
                        '                    return \'如我们需要果，想到的是给其设置一个透明度，并添加模糊滤效果，首先想到的是给其设置一个透明度，并添加模糊滤镜比如我们需要将上图中页面中间的文字区域变成毛玻璃效果，首先想到的是给其设置一个透明度，并添加模糊滤镜\n' +
                        '                    return \'如我们需要果，想到的是给其设置一个透明度，并添加模糊滤效果，首先想到的是给其设置一个透明度，并添加模糊滤镜比如我们需要将上图中页面中间的文字区域变成毛玻璃效果，首先想到的是给其设置一个透明度，并添加模糊滤镜\n' +
                        '                    return \'如我们需要果，想到的是给其设置一个透明度，并添加模糊滤效果，首先想到的是给其设置一个透明度，并添加模糊滤镜比如我们需要将上图中页面中间的文字区域变成毛玻璃效果，首先想到的是给其设置一个透明度，并添加模糊滤镜\n' +
                        '                    return \'如我们需要果，想到的是给其设置一个透明度，并添加模糊滤效果，首先想到的是给其设置一个透明度，并添加模糊滤镜比如我们需要将上图中页面中间的文字区域变成毛玻璃效果，首先想到的是给其设置一个透明度，并添加模糊滤镜\n' +
                        '                    return \'如我们需要果，想到的是给其设置一个透明度，并添加模糊滤效果，首先想到的是给其设置一个透明度，并添加模糊滤镜比如我们需要将上图中页面中间的文字区域变成毛玻璃效果，首先想到的是给其设置一个透明度，并添加模糊滤镜\n' +
                        '                    return \'如我们需要果，想到的是给其设置一个透明度，并添加模糊滤效果，首先想到的是给其设置一个透明度，并添加模糊滤镜比如我们需要将上图中页面中间的文字区域变成毛玻璃效果，首先想到的是给其设置一个透明度，并添加模糊滤镜'
                }
            }
        },
        data() {
            return {
                msg: 'this is a message!'
            }
        },
        methods: {
            back() {
                this.$emit('close')
            }
        }
    }

</script>
