<template>
    <div class="eric-box">
        <ul ref="wrapper">
            <li v-for="(er, i) in eric" :key="i">
                {{er}}
            </li>
        </ul>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    *
        padding 0
        margin 0

    ul, li {
        list-style-type none
        font-size 16px
        font-weight 400
    }

    .eric-box
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        display flex
        justify-content:center
        align-items center
        background-color antiquewhite
        overflow scroll
        ul
            margin-top 1800px
            transition all 0.5s linear
            >li
                padding 3px 6px


</style>

<script>
    export default {
        data() {
            return {
                eric: [
                        'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj','asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj','asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj','asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj','asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj','asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',
                    'asbcajbccachbasj',

                ]
            }
        },
        mounted() {
            let self = this
            let i = 0
            this.timer = setInterval(()=>{
                self.$refs.wrapper.style.marginTop = (1800 - i * 20) + 'px'
                i ++
            }, 500)
        }
    }
</script>
