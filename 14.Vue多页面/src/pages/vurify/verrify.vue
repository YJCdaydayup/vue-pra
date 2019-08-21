<template>
    <div class="container">
        <form class="form">
            <input class="input" type="text" v-model="username" placeholder="输入用户名">
            <input class="input" type="password" v-model="password" placeholder="请输入密码">
            <input class="input" type="password" v-model="rePass" placeholder="请确认密码">
            <input class="input" type="email" v-model="email" placeholder="输入邮箱">
            <input class="input last" type="tel" v-model="phone" placeholder="输入电话">
            <input class="submit" type="button" @click="handleSubmit" value="提交">
            <transition name="fade">
                <div v-show="showError" class="err-box">
                    <ul class="err-container">
                        <li class="err-item" v-for="(err, index) in errors" :key="index" v-text="err"></li>
                    </ul>
                </div>
            </transition>
        </form>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .container
        position: absolute
        left: 0
        top: 0
        width 100%
        height 100%
        .form
            margin 100px 60px auto
            .input
                display block
                width 100%
                height 36px
                border 1px solid rgba(29, 29, 29, 0.3)
                border-bottom none
                &.last
                    border-bottom 1px solid rgba(29, 29, 29, 0.3)

            .submit
                margin-top 20px
                width 100%
                height 36px
                border-radius 5px
                background-color: lightpink
        .err-box
            position fixed
            left: 0
            top: 0
            right: 0
            bottom: 0
            background-color rgba(29, 29, 29, 0.2)
            display flex
            justify-content center
            align-items center
            transition all 0.3s
            opacity 1
            &.fade-enter, &.fade-leave-to
                opacity 0
            .err-container
                background-color white
                border-radius 8px
                width 60%
                padding 12px 8px
                list-style-type none
                .err-item
                    width 100%
                    font-size 14px
                    color: darkolivegreen
                    line-height 16px
                    text-align left
                    margin-bottom 10px
                    &:last-child
                        margin-bottom 0


</style>

<script>

    export default {
        data() {
            return {
                username: '',
                password: '',
                rePass: '',
                email: '',
                phone: '',
                showError: false
            }
        },
        computed: {
            errors() {
                return this.$vuerify.$errors // 错误信息会在 $vuerify.$errors 内体现
            }
        },
        vuerify: {
            username: {
                test: /\w{4,}/,  // 自定义规则，可以是函数，正则或者全局注册的规则（填字符串）
                message: '至少 4 位字符'
            },
            password: 'required', // 使用全局注册的规则
            rePass: {
                test: function () {
                    if (this.rePass !== this.password) {
                        return false;
                    } else {
                        return true;
                    }
                },
                message: '两次密码输入不一致'
            },
            email: [ // 支持传入数组
                'required',
                'email',
            ],
            phone: 'phone' // 使用全局自定义规则
        },
        methods: {
            handleSubmit() {
                if (this.$vuerify.check()) { // 手动触发校验所有数据
                    alert('提交成功');
                } else {
                    this.showError = true;
                }
            }
        },
        mounted() {

        },
        watch:{
            showError: {
                deep: true,
                handler: function (newVal,oldVal){
                    if (newVal) {
                        let timer = setTimeout(()=>{
                            this.showError = false;
                        },1000)
                    }
                }
            }
        }
    }
</script>
