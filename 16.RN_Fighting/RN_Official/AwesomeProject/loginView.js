import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

let dimensions = require('Dimensions')
let {width} = dimensions.get('window');

export default class loginView extends Component {

    state = {
        userName: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.iconStyle}
                    source={require('./images/icon.png')}
                />
                <TextInput
                    placeholder="请输入用户名"
                    style={styles.inputStyle}
                    value={this.state.userName}
                    returnKeyType={'search'}
                />
                <TextInput
                    placeholder="请输入密码"
                    password={true}
                    style={styles.inputStyle}
                    onChangeText={(ev)=>{
                        this.setState({
                            userName: ev
                        })
                    }}
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        AlertIOS.alert('登录成功')
                    }}
                >
                    <View style={styles.loginBtnStyle}>
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}
                        >登录</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                <View style={styles.otherStyle}>
                    <Text
                        style={{
                            alignSelf: 'center'
                        }}
                    >
                        其他登录方式
                    </Text>
                    <Image
                        style={styles.imageStyle}
                        source={require('./images/icon3.png')}
                    />
                    <Image
                        style={styles.imageStyle}
                        source={require('./images/icon7.png')}
                    />
                    <Image
                        style={styles.imageStyle}
                        source={require('./images/icon8.png')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f3f5f7',
    },
    iconStyle: {
        width: 80,
        height: 80,
        marginTop: 100,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'orange',
        marginBottom: 30
    },
    inputStyle: {
        width: width * 0.9,
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 1,
        marginLeft: width * 0.05,
        paddingLeft: 10
    },
    loginBtnStyle: {
        marginTop: 30,
        width: width * 0.9,
        backgroundColor: 'blue',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10
    },
    settingStyle: {
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    otherStyle: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        flexDirection: 'row'
    },
    imageStyle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10
    }
});

module.exports = loginView;
