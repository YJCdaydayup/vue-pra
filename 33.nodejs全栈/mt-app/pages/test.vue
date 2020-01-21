<template>
    <div class="m-test">
        <ul class="top-menue">
            <li>
                <a href="#">我的美团</a>
                <dl>
                    <dd><a href="#">我的订单</a></dd>
                    <dd><a href="#">我的收藏</a></dd>
                    <dd><a href="#">抵用券</a></dd>
                    <dd><a href="#">我的设置</a></dd>
                </dl>
            </li>
            <li>
                <a href="">手机App</a>
            </li>
            <li>
                <a href="#">商家中心</a>
                <dl>
                    <dd><a href="#">登录商家中心</a></dd>
                    <dd><a href="#">不满意免单</a></dd>
                    <dd><a href="#">免费手机开店</a></dd>
                    <dd><a href="#">商家申请开票</a></dd>
                </dl>
            </li>
            <li>
                <a href="#">网站导航</a>
                <dl class="site-nav">
                    <dd>

                    </dd>
                    <dd>2</dd>
                    <dd>3</dd>
                </dl>
            </li>
        </ul>
        <div class="search-bar">
            <div class="content">
                    <div class="logo">
                        <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" title="美团">
                    </div>
                     <div class="search-box">
                        <input v-model="searchText" @focus="focus" @blur="blur" type="text" placeholder="搜索商家和地点"><i class="el-icon-search"></i>
                        <dl class="key-search">
                            <dd @click="click(keyword)" v-for="(keyword, index) in keywords" :key="index"><a href="#">{{keyword}}</a></dd>
                        </dl>
                        <dl class="hot-search" v-if="isFocusState">  
                            <dt>热门搜索</dt>
                            <dd @click="click(search)" v-for="(search, index) in hotSearchs" :key="index"><a href="#">{{search}}</a></dd>
                        </dl>
                        <dl class="my-search" v-if="isInputState">
                            <dd @click="click(search)" v-for="(search, index) in mySearchs" :key="index"><a href="#">{{search}}</a></dd>
                        </dl>
                     </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .m-test 
        background-color #eee
        position absolute
        left 0
        top 0
        right 0
        height 40px
        background-color #ccc
        .search-bar 
            width 100%
            margin 40px auto 
            background-color #fff
            height 200px
            .content
                width 1000px
                margin 0 auto
                display flex
                justify-content flex-start
                .logo 
                    display inline-block
                    width 130px
                    height 130px
                    position relative
                    top 50px
                    >img 
                        width 100%
                        height auto
                .search-box 
                    display inline-block
                    margin-top 50px
                    margin-left 100px
                    position relative
                    >input 
                        width 500px
                        border 1px solid #65b6af
                        height 46px
                        border-radius 5px
                        padding 3px 6px
                        font-size 15px
                        box-sizing border-box
                        outline none
                    >i 
                        width 80px
                        height 46px
                        background-color #65b6af
                        color #fff 
                        font-size 16px
                        text-align center
                        line-height 46px
                        position absolute
                        right 0
                        border-radius 5px
                    .key-search 
                        overflow hidden
                        margin-top 5px
                        >dd
                            float left
                            margin-left 12px
                            a 
                                color gray 
                                &:hover
                                    color #65b6af
                    .hot-search
                        position absolute
                        top 50px
                        left 0
                        right 0
                        background #eee
                        padding 12px 10px
                        box-shadow 2px 2px 2px #eee
                        border-radius 5px
                        >dt 
                            color black
                            font-size 14px
                            margin 6px 0 10px 12px
                        dd
                            float left
                            margin-left 12px
                            a
                                color gray
                                &:hover 
                                    color #65b6af
                    .my-search
                        position absolute
                        top 50px
                        left 0
                        right 0
                        background #eee
                        padding 12px 10px
                        box-shadow 2px 2px 2px #eee
                        border-radius 5px
                        dd
                            margin-top 12px
                            &:hover 
                                a 
                                    color #65b6af
                            a
                                color gray



                    

        .top-menue
            height 80px
            position absolute
            right 20px
            list-style-type none
            a
                display block
                font-size 14px
            >li 
                float left
                line-height 40px
                text-align center
                width 96px
                box-sizing border-box
                >a:hover 
                    color brown
                    background rgba(29,29,29,0.3)
                &:hover 
                    border-left 1px solid #ccc
                    border-right 1px solid #ccc
                    border-bottom 1px solid #ccc
                    box-shadow 1px 1px 3px #ccc
                    dl 
                        display block
                >dl 
                    display none
                    width 100%
                    box-sizing border-box
                    dd 
                        line-height 40px
                        &:hover
                            >a 
                                color brown 
                                background rgba(29,29,29,0.3)
                        &:last-child
                            padding-bottom 10px
                .site-nav 
                    position fixed
                    left 0
                    top 40px
                    right 0
                    height 100px
                    background-color #ddd
                    overflow hidden
                    z-index 10
                    >dd 
                        float left
                        width 33.33%

</style>

<script>
export default {
    layout: 'test',
    data() {
        return {
            isFocus: false,
            searchText: '',
            keywords: [
                '故宫博物馆',
                '少年宫',
                '颐和园',
                '世界之窗',
                '鹏城第一峰'                
            ],
            hotSearchs: [
                '火锅',
                '鱼香肉丝',
                '麻辣香锅',
                '韩国料理',
                '宫保鸡丁',
                '金针菇炒肉'
            ],
            mySearchs: [
                '香锅',
                '香锅',
                '香锅',
                '香锅',
                '香锅',
                '香锅',
                '香锅',
                '香锅',
                '火锅'
            ]
        }
    },
    computed: {
        isFocusState() {
            return this.isFocus && !this.searchText
        },
        isInputState() {
            return this.isFocus && this.searchText
        }
    },
    methods: {
        focus() {
            this.isFocus = true;
        },
        blur() {
            setTimeout(()=>{
                this.isFocus = false;
            },500)
        },
        click(search) {
            this.searchText = search;
        } 
    }
}
</script>

