<template>
    <transition name="move">
        <div class="fxjs-box">
            <h1 class="title">适当性匹配意见及投资者确认书</h1>
            <p class="sd-result">适当性评估结果：</p>
            <div class="invest-info">
                尊敬的投资者（姓名/名称：<strong class="name"> {{investInfo.name | spaceName}}   </strong>资金账号：<strong
                    class="account">{{investInfo.account | spaceName}}</strong>)
            </div>
            <div class="risk-info">
                <p class="bear-level">您的风险承受能力等级为：<span class="bear-type">{{investInfo.bearLevel}}</span>；</p>
                <p class="serve">您拟接受的服务：科创板交易权限；</p>
                <p class="risk-level">风险等级为：<span class="risk-type">{{investInfo.riskLevel}}</span>；</p>
            </div>
            <div class="company-declare">
                <p>我司已经向您充分揭示了该服务的风险。您的风险承受能力等级与该服务风险等级相匹配。本适当性评估意见供您决策参考，本意见在任何情况下均不构成我司及从业人员对该服务及衍生风险的实质性判断以及对您投资本金不受损失、投资收益的任何保证，与该服务相关的投资风险、履约责任以及费用等将由您自行承担。</p>
                <p>特别提示：本次服务仅涉及创业板转签，若需要参与其他特别业务的，还须按有关监管规定接受我司相应的审核，具体情况可向我司客服人员咨询。
                    我司就上述适当性评估结果与您进行确认，并建议您审慎考察该服务及有关投资的特征及风险，进行充分风险评估，自行做出投资决定。</p>
            </div>
            <p class="gaizhang">分支机构盖章: 川财证券有限责任公司&nbsp;______&nbsp;分公司/ 营业部</p>
            <div class="date-title">{{dateTitle}}：<span class="date">{{investInfo.date}}</span></div>
            <!-- 华丽的分割线 -->
            <div class="sep-line"></div>
            <div class="confirm">客户确认：</div>
            <div class="company-title">川财证券有限责任公司&nbsp;______&nbsp;分公司/营业部：</div>
            <div class="confirm-content">
                <p>本人确认自身风险承受能力等级与该服务风险等级相匹配。</p>
                <p>本人知悉，因本人相关情况变化，与本确认书载明的不一致后，贵司有权暂停或终止向本人提供该项金融服务，对此本人无异议并自愿承担由此可能造成的一切损失。</p>
                <p>本人接受本次服务并进行有关投资的决定，系本人独立、自主、真实的意思表示，与贵司及从业人员无关。与相关产品或服务的投资风险、履约责任以及费用等将由本人自行承担。</p>
            </div>
            <div class="gaizhang">投资者签名或盖章：<strong class="name">{{investInfo.name}}</strong></div>
            <div class="date-title">
                {{investDateTitle}}： <span>{{investInfo.date}}</span>
            </div>
        </div>
    </transition>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    * {
        padding 0
        margin 0
    }

    $title_color = #505050
    $base_color = #404040

    .base_class
        font-size: 14px
        color: $base_color
        line-height: 20px

    .fxjs-box
        position: absolute
        left: 0
        top: 0
        bottom: 0
        right: 0
        z-index: 10
        padding: 36px 22px
        background-color: #fff
        transition: all 0.5s
        transform: translate3d(0, 0, 0)
        &.move-enter, &.move-leave-to
            transform: translate3d(100%, 0, 0)
        .title
            text-align: center
            font-size: 16px
            color: $title_color
            margin-bottom: 31px
        .sd-result
            font-size: 14px
            color: $title_color
            line-height: 20px
            margin-bottom: 17px
            font-family: PingFangSC-Medium;
        .invest-info
            @extend .base_class
            margin-bottom: 17px
            .name
                text-decoration underline
            .account
                text-decoration underline
        .risk-info
            @extend .base_class
            margin-bottom: 17px
        .company-declare
            @extend .base_class
            margin-bottom: 17px
        .gaizhang
            @extend .base_class
            margin-bottom: 34px
        .date-title
            @extend .base_class
            padding-bottom: 17px
        .sep-line
            margin-left: -22px
            background-color: rgba(29, 29, 29, 0.1)
            width: 1000px
            height: 1px
            margin-bottom: 37px
        .confirm
            font-size: 14px
            color: $title_color
            line-height: 20px
            margin-bottom: 17px
            font-family: PingFangSC-Medium;
        .company-title
            @extend .base_class
            margin-bottom: 17px
        .confirm-content
            @extend .base_class
            margin-bottom: 17px

</style>

<script>

    export default {
        props: {
            investInfo: {
                type: Object,
                default() {
                    return {
                        name: '杨某某',
                        account: '123456',
                        bearLevel: '稳健型',
                        riskLevel: '低风险',
                        date: '2019年03月18日'
                    }
                }
            }
        },
        data() {
            return {}
        },
        filters: {
            spaceName(name) {
                return '\xa0\xa0\xa0' + name + '\xa0\xa0\xa0'
            }
        },
        computed: {
            dateTitle() {
                return '日' + '\xa0\xa0\xa0\xa0' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\ ' + '期'
            },
            investDateTitle() {
                return '日' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\ ' + '期'
            }
        }
    }

</script>
