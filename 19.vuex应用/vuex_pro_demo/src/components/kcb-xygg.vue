<template>
    <div class="xg-box">
        <h3>关于增加信用账户科创板股票交易风控措施指标的公告 </h3>
        <p class="brief">为了有效防范和化解科创板股票融资融券业务风险，保护投资者的合法利益，根据融资融券业务规则及科创板股票交易特性，公司决定增加信用账户科创板股票交易风险控制措施，具体如下：</p>
        <div class="dialog">
            <h4>一、单一客户科创板融资总额控制 </h4>
            <p>单一客户科创板融资总额不超过 500 万元。</p>
        </div>
        <div class="dialog">
            <h4>二、科创板股票融资保证金比例设置  </h4>
            <p>1.科创板股票上市后的 5 个交易日内，融资保证金比例为 200%；</p>
            <p>2.科创板股票上市 5 个交易日后，融资保证金比例＝max(1+0.5-担保证券折算率，1)。</p>
        </div>
        <div class="dialog">
            <h4>三、投资者信用账户科创板股票集中度控制  </h4>
            <p>1.“投资者信用账户科创板股票集中度”释义</p>
            <p>投资者信用账户科创板股票集中度分为科创板板块集中度和科创板单票集中度。</p>
            <p>科创板板块集中度是指，投资者信用账户中科创板板块股票证券市值之和与投资者信用账户总资产的比例。</p>
            <p>科创板单票集中度是指，投资者信用账户中单只科创板股票证券市值与投资者信用账户总资产的比例。</p>
            <p>2.投资者通过信用账户融资买入科创板标的证券、担保品买入科创板担保证券时，应当符合以下条件：</p>
            <div class="form-info">
                <p>（1）上市 5 个交易日内集中度控制</p>
                <table border="0" cellpadding="0" cellspacing="0" class="table">
                    <tr>
                        <th>信用账户维持担保比例（R）</th>
                        <th>科创板单票集中度</th>
                        <th>科创板板块集中度</th>
                    </tr>
                    <tr>
                        <td>R≤300%</td>
                        <td>≤5%</td>
                        <td>≤10%</td>
                    </tr>
                    <tr>
                        <td>R＞300%或无负债</td>
                        <td>≤5%</td>
                        <td>≤15%</td>
                    </tr>
                </table>
                <p>（2）上市 5 个交易日以后集中度控制</p>
                <table border="0" cellpadding="0" cellspacing="0" class="table">
                    <tr>
                        <th>信用账户维持担保比例（R））</th>
                        <th>科创板单票集中度</th>
                        <th>科创板板块集中度</th>
                    </tr>
                    <tr>
                        <td>R≤180%</td>
                        <td>≤10%</td>
                        <td>≤25%</td>
                    </tr>
                    <tr>
                        <td>180%＜R≤240% </td>
                        <td>≤20%</td>
                        <td>≤35%</td>
                    </tr>
                    <tr>
                        <td>240%＜R≤300%</td>
                        <td>≤30%</td>
                        <td>≤45%</td>
                    </tr>
                    <tr>
                        <td>R＞300%或无负债</td>
                        <td>≤40%</td>
                        <td>≤55%</td>
                    </tr>
                </table>
            </div>
            <p>凡在我司开通信用账户科创板股票业务权限的投资者，在参与科创板股票融资融券交易时，均受以上风险控制措施的约束。</p>
            <p>特此公告！</p>
            <div class="tail-info">
                <p>川财证券有限责任公司</p>
                <p>{{date}}</p>
            </div>
            <div class="investor">
                <h4>投资者签署栏： </h4>
                <p>本人已全面知晓并理解《关于增加信用账户科创板股票交易风控措施指标的公告》的内容，同意在该公告中风险控制措施的约束下参与信用账户科创板股票交易，并自愿承担可能引起的风险和损失。</p>
                <p class="sign">投资者确认签字：<strong>{{name}}</strong></p>
                <p class="sign">签署日期： {{date}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    *
        margin 0
        padding 0
    div 
        font-size 14px
        color #404040

    .xg-box 
        padding 10px 20px
        box-sizing border-box
        text-indent 2em
        line-height 2
        >h3
            padding 10px
            text-align center
        .dialog
            h4
                margin 8px 0
            .form-info
                .table  
                    border-bottom  1px solid gray
                    th, td
                        text-indent 0
                        width 300px
                        text-align center
                        font-size 12px
                        border-top  1px solid gray
                        border-left  1px solid gray
                        &:last-child
                            border-right  1px solid gray
                        
        .tail-info
            text-align right 
        .investor
            margin-top 36px
            .sign
                float right
                width 70%
                margin 30px 0
                text-align left 
                &:last-child
                    margin-top -20px

            
</style>

<script>
export default {
    name: 'kcb-xggg',
    props: {
        name: {
            type: String,
            default: '张三'
        },
        date: {
            type: String,
            default: '2020年03月26日'
        }
    }
}
</script>