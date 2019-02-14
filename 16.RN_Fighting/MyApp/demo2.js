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

var Data = require('./Data.json');

// 定义全局变量
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var cols = 3;
var boxW = 100;
var vMargin = (width - cols*boxW)/(cols + 1);
var hMargin = 50;

export default class Test3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewStyle}>
                    {this.renderAllBaobao()}
                </View>
            </View>
        )
    }

    // 获取View中所有的包包
    renderAllBaobao() {
        var images = [];
        for (var i = 0; i < Data.length; i++) {
            // 创建组件
            var item = Data[i];
            images.push(
                <View
                    key={i}
                    style={styles.outViewStyle}
                >
                    <Image
                        style={styles.imageStyle}
                        source={{uri: item.icon}}
                    />
                    <Text>{item.name}</Text>
                </View>
            )
        }
        return images;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff'
    },
    viewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imageStyle: {
        width: 80,
        height: 80
    },
    outViewStyle: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: boxW,
        height: boxW,
        marginLeft: vMargin,
        marginTop: hMargin
    }
});


// 输出到iOS App里面
AppRegistry.registerComponent('MyApp', () => Test3);
