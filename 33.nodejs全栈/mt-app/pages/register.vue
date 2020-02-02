<template>
    <div class="page-register">
        <article class="header">
          <header>
            <a href="/" class="site-logo"></a>
            <span class="login">
              <em class="bold">已有美团账号？</em>
              <a href="/login">
                <el-button type="primary" size="small">登录</el-button>
              </a>
            </span>
          </header>
        </article>
        <section>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="昵称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
                <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
                <span v-if="statusMsg" class="status">{{statusMsg}}</span>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input v-model="ruleForm.code" maxlength="4"/>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
              <el-input v-model="ruleForm.pwd" type="password"/>
            </el-form-item>
            <el-form-item label="确认密码" prop="cpwd">
              <el-input v-model="ruleForm.cpwd" type="password"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="register">同意以下协议并注册</el-button>
              <div class="error">{{error}}</div>
            </el-form-item>
            <el-form-item>
              <a class="f1" href="https://rules-center.meituan.com/rules-detail/2" target="_blank">《美团点评隐私政策》</a>
            </el-form-item>
          </el-form>
        </section>
    </div>
</template>

<style lang="scss">

  @import "@/assets/css/register/index.scss";

</style>

<script>

  import CryptoJS from 'crypto-js'

    export default {
        layout: 'blank',
        data() {
            return {
                msg: "hello vue",
                statusMsg: '',
                error: '',
                ruleForm: {
                    name:'',
                    code:'',
                    pwd:'',
                    cpwd:'',
                    email:''
                },
                rules: {
                  name: [{
                    required: true,
                    type: 'string',
                    message: '请输入昵称',
                    trigger: 'blur'
                  }],
                  email: [
                    {
                      required: true,
                      type: 'email',
                      message: '请输入邮箱',
                      trigger: 'blur'
                    }
                  ],
                  pwd: [
                    {
                      required: true,
                      message: '创建密码',
                      trigger: 'blur'
                    }
                  ],
                  cpwd: [
                    {
                      required: true,
                      message: '确认密码',
                      trigger: 'blur'
                    },{
                      // 确认密码事件
                      validate: (rule,value,callback)=>{
                        if (value === '') {
                          callback(new Error('请再次输入密码'))
                        }else if (value !== this.ruleForm.pwd) {
                          callback(new Error('两次输入密码不一致'))
                        }else {
                          callback()
                        }
                      },
                      trigger: 'blur'
                    }
                  ]
                }
            }
        },
        methods: {
          sendMsg() {
            const self = this;
            let namePass
            let emailPass
            if (self.timerid) {
              return false
            }
            this.$refs['ruleForm'].validateField('name',(valid)=>{
              // 有值表示错误
              namePass = valid;
            })
            self.statusMsg = ''
            if (namePass) {
              return false
            }

            // 判断单个邮箱是否验证通过
            this.$refs['ruleForm'].validateField('email', (valid) => {
              emailPass = valid;
            })

            // 姓名和邮箱通过就发送请求
            if (!namePass && !emailPass) {
              // 中文要进行编码
              self.$axios.post('/users/verify',{
                username: encodeURIComponent(self.ruleForm.name),
                email: self.ruleForm.email
              }).then(({status, data})=>{
                if (status === 200 && data && data.code === 0) {
                  let count = 60;
                  self.statusMsg = `验证码已发送，剩余${count --}秒`
                  self.timerid = setInterval(function() {
                    self.statusMsg = `验证码已发送，剩余${count --}秒`
                    if (count === 0) {
                      self.statusMsg = ''
                      clearInterval(self.timerid)
                      self.timerid = null;
                    }
                  },1000)
                }else {
                  self.statusMsg = data.msg;
                }
              })
            }
          },
          register() {
            let self = this;
            // 判断上面的所有验证规则是否验证通过
            this.$refs['ruleForm'].validate((valid)=>{
              if (valid) {
                self.$axios.post('/users/signup', {
                  username: window.encodeURIComponent(self.ruleForm.name),
                  // 密码在前端已经做好加密
                  password: CryptoJS.MD5(self.ruleForm.pwd).toString(), // 默认生成的是数组，转一下字符串即可
                  email: self.ruleForm.email,
                  code: self.ruleForm.code
                }).then(({status, data})=>{
                  if (status === 200) {
                    if (data && data.code === 0) {
                      location.href = '/login'
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
        }
    }
</script>


