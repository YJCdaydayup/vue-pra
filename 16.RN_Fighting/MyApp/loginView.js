import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput
} from 'react-native';

var dimension = require('Dimensions');
// var width = dimension.get('windows').width;
var {width} = dimension.get('window');



export default class loginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image
                    style={styles.iconStyle}
                    source={require('./images/icon.png')}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder={'请输入账号'}/>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder={'请输入密码'} password={true}/>
                {/*登录*/}
                <View style={styles.loginBtnStyle}>
                    <Text
                        style={{color: '#fff'}}
                    >登录</Text>
                </View>
                {/*设置*/}
                <View
                    style={styles.settingStyle}
                >
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                {/*三方登录方式*/}
                <View
                    style={styles.otherStyle}
                >
                    <Text>其他登录方式</Text>
                    <Image
                        style={styles.otherImageStyle}
                        source={require('./images/icon3.png')}
                    />
                    <Image
                        style={styles.otherImageStyle}
                        source={require('./images/icon7.png')}
                    />
                    <Image
                        style={styles.otherImageStyle}
                        source={require('./images/icon8.png')}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f3f5f7'
    },
    iconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: 'orange',
        borderWidth: 2,
        marginBottom: 30,
        marginTop: 100
    },
    textInputStyle: {
        backgroundColor: '#fff',
        height: 40,
        marginBottom: 1,
        paddingLeft: 15
    },
    loginBtnStyle: {
        width: width*0.9,
        backgroundColor: 'blue',
        height: 40,
        width: width,
        marginTop: 30,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    settingStyle: {
        flexDirection: 'row',
        width: width*0.9,
        justifyContent: 'space-between'
    },
    otherStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    otherImageStyle: {
        width: 40,
        height: 40,
        marginLeft: 10,
        borderRadius: 20
    }
});

// 输出
module.exports = loginView;


