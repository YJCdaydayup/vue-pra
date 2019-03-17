/**
 * Created by yangli on 2019/3/3.
 */
/**
 * Created by yangli on 2019/3/3.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            codeAlreadySend: false
        }

        this._getVertyCode = this._getVertyCode.bind(this)
        this._login = this._login.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>
               <View
                   style={styles.signupBox}
               >
                   <Text style={styles.title}>快速登录</Text>
                   <TextInput
                       placeholder='请输入手机号码'
                       autoCapitalize={'none'}
                       autoCorrect={false}
                       keyboardType={'phone-pad'}
                       underlineColorAndroid='transparent'
                       style={styles.inputStyle}
                       onChangeText={(text)=>{
                           this.setState({
                               phoneNumber: text
                           })
                       }}
                   />
                   {/* 发送验证码和登录按钮 */}
                   {this.state.codeAlreadySend?<View
                       style={styles.btn}
                   >
                       <Text style={styles.btnText}
                             onPress={this._login}
                       >登录</Text>
                   </View>
                       :
                       <View style={styles.btn}>
                       <Text style={styles.btnText}
                             onPress={this._getVertyCode}
                       >获取验证码</Text>
                   </View>}
               </View>
            </View>
        );
    }

    _login() {

    }

    _getVertyCode() {

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    signupBox: {
        marginTop: 60,
        padding: 10,
    },
    title: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333'
    },
    inputStyle: {
        height: 40,
        padding:5,
        colror: '#666',
        fontSize: 16,
        backgroundColor: '#fff',
        borderWidth: 0.5,
    },
    btn: {

    }
});
