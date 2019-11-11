<template>
    <div class="zy-container" style="display: flex;justify-content: center;align-items: center">
        <div class="logo">
            <img src="./img/logo.png" alt="">
        </div>
        <div>
            <div class="logo_icon">
                <img src="./img/applogo.png" alt="">
            </div>
            <div class="title">移动展业平台</div>
            <div class="info">
                <div class="content">
                    <p class="info-detail">移动展业（IPAD）</p>
                    <p class="info-detail">更新时间：2019-11-08</p>
                    <p class="info-detail">操作系统： iOS11以上版本</p>
                    <p class="info-detail">介绍说明：
                        移动展业是川财证券秉持着客户至上的理念，方便公司员工为客户上门办理业务而提供的移动系统。支持：机构/产品见证开户、客户资料修改、账户密码变更、委托方式变更、客户风险能力测评等业务。</pclass>
                    <p class="info-detail">版本更新说明：V1.00 上线</p>
                </div>
            </div>
            <div class="download">
                <!--                   <a class="download-btn" href="itms-services://?action=download-manifest&url=https://www.cczq.com/business/app/zay/ccZAY.plist">立即下载</a>-->
                <a class="download-btn"
                   href="https://www.cczq.com/business/app/zay/cczqV20190109000AM1.ipa">立即下载</a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    *
        padding 0
        margin 0
        font-size 0

    .zy-container
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        background url("./img/pic_bg.png") no-repeat
        background-size 100% 100%

        .logo
            position absolute
            left 0
            top 0

            img
                width 0.8rem
                height 0.8rem

        .logo_icon
            text-align center

            img
                width 0.96rem
                height 0.96rem

        .title
            margin-top 0.18rem
            text-align center
            font-size 0.16rem
            color #fff

        .info
            margin-top 0.122rem
            color #fff
            opacity 0.8
            text-align center

            .content
                display inline-block
                width 2.55rem
                text-align left

                .info-detail
                    font-size 0.12rem
                    margin-bottom 0.2rem

                    &:last-child
                        margin-bottom 0


        .download
            margin-top 0.2rem
            text-align center

            .download-btn
                text-decoration none
                display inline-block
                width 2.531rem
                height 0.456rem
                line-height 0.456rem
                font-size 0.22rem
                border-radius 0.05rem
                background-color #608df7
                color #fff
                outline none
</style>
