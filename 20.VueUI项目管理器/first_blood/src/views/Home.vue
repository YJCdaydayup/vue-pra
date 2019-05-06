<template>
    <div>
        <div class="tab-pane">
            <a-tabs defaultActiveKey="1" @change="callback">
                <a-tab-pane tab="账号密码登录" key="1">
                    <a-form
                            id="components-form-demo-normal-login"
                            :form="form"
                            class="login-form"
                            @submit="handleSubmit"
                    >
                        <a-form-item>
                            <a-input class="login-input"
                                    v-decorator="[
          'account',
          { rules: [{ required: true, message: 'Please input your username!' },{ validator: handleUsernameOrEmail }] }
        ]"
                                    placeholder="账户名或邮箱地址"
                            >
                                <a-icon
                                        slot="prefix"
                                        type="user"
                                        style="color: rgba(0,0,0,.25)"
                                />
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-input class="login-input"
                                    v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
                                    type="password"
                                    placeholder="密码"
                            >
                                <a-icon
                                        slot="prefix"
                                        type="lock"
                                        style="color: rgba(0,0,0,.25)"
                                />
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-checkbox
                                    class="auto-login"
                                    v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
                            >
                                自动登录
                            </a-checkbox>
                            <a
                                    class="login-form-forgot"
                                    href=""
                            >
                                忘记密码
                            </a>
                        </a-form-item>
                        <a-form-item>
                            <a-button
                                    type="primary"
                                    html-type="submit"
                                    class="login-form-button"
                            >
                                登录
                            </a-button>
                        </a-form-item>
                    </a-form>
                </a-tab-pane>
                <a-tab-pane tab="手机号登录" key="2">

                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script>

    export default {
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            handleUsernameOrEmail(rule, value, callback) {
                const regex = /^1[3|5|4|7|8][\d]{9}$/;
                callback()
            }
        },
    };
</script>
<style>
    .tab-pane {
        width: 500px;
        margin: 100px auto;
    }
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }

    .auto-login {
        float: left;
    }

    .login-input {
        height: 40px;
    }

    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }
    #components-form-demo-normal-login .login-form-button {
        font-size: 16px;
        width: 100%;
        font-weight: 600;
        height: 40px;
    }
</style>
