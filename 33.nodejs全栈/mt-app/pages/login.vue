<template>
    <div class="login">
        <div class="login-box">
            <div class="logo"></div>
            <div class="login-content">
                <div class="des-pic"></div>
                <div class="content">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="ruleform">
                        <div class="top">
                            <span>账号登录</span>
                            <span>手机动态码登录</span>
                        </div>
                        <el-form-item class="phone" label-width="60px" label="" prop="username">
                            <el-input class="input" v-model="ruleForm.username" placeholder="手机号" maxlength="11"></el-input>
                        </el-form-item>
                        <el-form-item label-width="60px" label="" prop="password">
                            <el-input type="password" v-model="ruleForm.password" placeholder="密码" maxlength="6"></el-input>
                        </el-form-item>
                        <el-form-item label-width="60px">
                            <el-button type="primary" @click="submitForm">登录</el-button>
                            <span class="error">{{error}}</span>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">

    .login {
        width: 980px;
        margin: 40px auto 30px;
        .login-box {
            .logo {
                width: 130px;
                height: 47px;
                background: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png") no-repeat;
                background-size: 130px 47px;
            }
            .login-content {
                margin-top: 30px;
                display: flex;
                .des-pic {
                    width: 480px;
                    height: 370px;
                    background: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg") no-repeat;
                    background-size: 480px 370px;
                }
                .content {
                    flex: 1;
                    padding: 60px 110px 10px 60px;
                    box-sizing: border-box;
                    .ruleform {
                        .top {
                            display: flex;
                            padding-left: 60px;
                            justify-content: space-between;
                            line-height: 30px;
                            margin-bottom: 3px;
                            font-weight: 800;
                            color: gray;
                            font-size: 13px;
                            >span:last-child {
                                font-size: 12px;
                                font-weight: 500;
                                position: relative;
                                left: -15px;
                                &::after {
                                    content: '';
                                    position: absolute;
                                    right: -15px;
                                    top: 8px;
                                    width: 14px;
                                    height: 14px;
                                    background: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/mobile.24bd95a.png);
                                    background-size: contain;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>

<script>

import CryptoJS from 'crypto-js'

export default {
    layout: 'blank',
    data() {
        return {
            error:'',
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [{
                        required: true,
                        type: 'string',
                        message: '请输入手机号码', // 这个结合required：true 就已经是为空的判断
                        trigger: 'blur'
                        },{
                        // 确认密码事件
                        validator: (rule,value,callback)=>{ // validator方法名不能写错
                            // var re=/^\+?[0-9][0-9]*$/;
                            // if(!re.test(value) || value.length !== 11){
                                // callback(new Error('输入手机号号格式有误'))
                            // }else {
                                callback()
                            // }
                            },
                            trigger: 'blur'
                        }],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                    }]
            }
        }
    },
    methods: {
        submitForm() {
             let self = this;
            // 判断上面的所有验证规则是否验证通过
            this.$refs['ruleForm'].validate((valid)=>{
              if (valid) {
                self.$axios.post('/users/signin', {
                  username: self.ruleForm.username,
                  // 密码在前端已经做好加密
                  password: CryptoJS.MD5(self.ruleForm.password).toString(), // 默认生成的是数组，转一下字符串即可
                }).then(({status, data})=>{
                  if (status === 200) {
                    if (data && data.code === 0) {
                      location.href = '/'
                    }else {
                      self.error = data.msg
                    }
                  }else {
                    self.error = `服务器出错，错误码:${status}`
                  }
                  setTimeout(()=>{
                    self.error = ''
                  },1500);
                })
              }
            })
        }
    },
}
</script>