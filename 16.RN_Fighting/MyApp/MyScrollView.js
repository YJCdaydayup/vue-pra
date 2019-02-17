/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';


// 1.react-timer-mixin 安装这个工程，定时器
// var TimerMixin = require('react-timer-mixin');

// 2.引入数据
// var imageData = require('./data.json');
//
// // 3.
// var Dimensions = require('Dimensions');
// var {width} = Dimensions.get('window');

export default class MyApp extends Component {

    // 2.注册定时器
    // mixins: [TimerMixin];

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }

    // 加载所有的图片
    renderAllImage() {
        // 数组
        var allImage = [];
        // 拿到图片的数据
        var imgsArr = imageData.data;
        for (var i = 0; i < imgsArr.length; i++) {
            var imgItem = imgsArr[i];
            allImage.push(
                <Image
                    key={i}
                    source={{uri: imgItem.img}}
                    style={{width: width, height: 120}}
                />
            )
        }
        return allImage;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    pageViewStyle: {
        width: width,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        bottom: 0
    }
});

AppRegistry.registerComponent('MyApp', () => MyApp);
