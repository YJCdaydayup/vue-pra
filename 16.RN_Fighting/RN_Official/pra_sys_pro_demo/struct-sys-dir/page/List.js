import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    Modal,
    TextInput,
    AlertIOS
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

var timer;

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // 关于模态视图 fade slide none 动画效果
            animationType: 'slide',
            modalVisible: false, // 是否显示
            transparent: true, // 是否半透明

            hasSendMessage: false,
            count: 60,
            phoneNumer: '',
            verifyCode: ''
        }

        this._close = this._close.bind(this);
        this._startShow = this._startShow.bind(this);
        this._login = this._login.bind(this);
        this._sendMsg = this._sendMsg.bind(this);
    }

    render() {

        let params = this.props.navigation.getParam('title','默认值');

        return (
            <View style={{flex: 1,alignItems: 'center'}}>
                <Button
                    title="模态化跳转"
                    onPress={() => {
                        console.log('abcdjhwuifhwfwe')
                        // this.props.navigation.push('Modal')
                    }}
                />

                <Text
                    style={{
                        width: 100,
                        height: 46,
                        borderColor: '#333',
                        borderWidth: 1,
                        borderRadius: 5,
                        lineHeight: 46,
                        textAlign: 'center'
                    }}
                >{params}</Text>

                <Button
                    title="导航跳转"
                    onPress={()=>{
                        this.props.navigation.push('List', {
                            title: '我是参数'
                        })
                    }}
                />

                <Button
                    title="展示Modal组件"
                    onPress={this._startShow}
                />

                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onShow={this._startShow}
                    style={styles.modalStyle}
                >
                    <View style={styles.cover}
                          onPress={this._close}
                    >
                        <View style={styles.bgStyle}
                              onPress={this._close}
                        >
                            <TextInput
                                style={styles.phoneInputStyle}
                                placeholder="请输入手机号"
                                underlineColorAndroid='transparent'
                                keyboardType={'phone-pad'}
                                onChangeText={(text) => {
                                    this.setState({
                                        phoneNumer: text
                                    })
                                }}
                            />
                            {this.state.hasSendMessage ? <View style={styles.verifyStyle}>
                                <TextInput
                                    placeholder="输入验证码"
                                    underlineColorAndroid='transparent'
                                    keyboardType={'phone-pad'}
                                    style={[styles.phoneInputStyle, {
                                        flex: 6,
                                        marginLeft: 0,
                                        marginTop: 0,
                                        marginRight: 10
                                    }]}
                                    onChangeText={(text) => {
                                        this.setState({
                                            verifyCode: text
                                        })
                                        clearInterval(timer);
                                    }}
                                />
                                <Text style={styles.codeStyle}>{this.state.count}</Text>
                            </View> : null}

                            {this.state.hasSendMessage ? <Text
                                onPress={this._login}
                                style={styles.msgStyle}
                            >注册</Text> : <Text
                                onPress={this._sendMsg}
                                style={styles.msgStyle}
                            >发送验证码</Text>}
                        </View>

                    </View>
                </Modal>
            </View>
        )
    }

    _login() {
        let code = this.state.verifyCode;
        if (/^[\d]{6}$/g.test(code)) {
            AlertIOS.alert("恭喜", '注册成功！！！', this._close)
        }else {
            AlertIOS.alert('输入验证码有误，请重新输入！！！');
        }
    }

    _sendMsg() {
        // 判断手机号
        let fg = /^[\d]{11}$/gi.test(this.state.phoneNumer);
        if (!fg) {
            console.log(fg)
            return;
        }

        this.setState({
            hasSendMessage: true,
            count: 60
        })

        timer = setInterval(() => {
            let currentCount = this.state.count;
            if (currentCount !== 1) {
                currentCount -= 1;
            } else {
                this.setState({
                    hasSendMessage: false,
                })
                clearInterval(timer);
            }
            this.setState({
                count: currentCount
            })
        }, 1000)
    }

    _close() {
        this.setState({
            modalVisible: false
        })
    }

    _startShow() {
        this.setState({
            modalVisible: true
        })
    }
}

const styles = StyleSheet.create({
    modalStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'red'
    },
    btnStyle: {
        marginTop: 200
    },
    cover: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(29,29,29,0.3)',
        paddingTop: 100
    },
    bgStyle: {
        marginTop: 100,
        flex: 1,
        backgroundColor: '#fff'
    },
    phoneInputStyle: {
        marginTop: 60,
        borderWidth: 1,
        borderColor: 'rgba(29,29,29,0.3)',
        marginHorizontal: 10,
        height: 40,
        paddingLeft: 10,
        borderRadius: 3
    },
    msgStyle: {
        marginTop: 10,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ddd',
        borderRadius: 3,
        textAlign: 'center',
        color: 'rgb(54,34,230)'
    },
    verifyStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 10,
        marginHorizontal: 10,
    },
    codeStyle: {
        flex: 4,
        height: 40,
        backgroundColor: '#eee',
        textAlign: 'center',
        lineHeight: 40,
        borderRadius: 5
    }
})
