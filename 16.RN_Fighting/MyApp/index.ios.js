/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

export default class Test3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>加载项目中的图片</Text>
                <Image style={styles.imageStyle}
                    source={require('./images/danjianbao.png')}
                />
                <Text>加载App中的图片</Text>
                <Image
                    source={{uri: 'shuangjianbao'}}
                    style={styles.imageStyle}
                />
                <Text>加载网络图片</Text>
                <Image
                    style={styles.imageStyle}
                    source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}
                />
                <Image
                    source={{uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365018759,2226705862&fm=27&gp=0.jpg'}}
                    style={styles.image1Style}
                >
                    <Text style={styles.textStyle}>设置图片为背景</Text>
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: 80,
        height: 80,
        resizeMode: 'contain' // 等比例缩放
    },
    image1Style: {
        width: 300,
        height: 200,

    },
    textStyle: {
        // paddingTop: 80,
        // backgroundColor: 'rgba(0,0,0,0)'
        backgroundColor: 'transparent',
        marginTop: 100,
        color: 'white',
        fontSize: 30,
        fontWeight:  'bold'
    }
});


// 输出到iOS App里面
AppRegistry.registerComponent('MyApp', () => Test3);
