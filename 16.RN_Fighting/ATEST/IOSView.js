/**
 * Created by yangli on 2019/2/24.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

let {requireNativeComponent} = require('react-native');
// 第二个参数尽量就是当前类IOSView类
let HKView = requireNativeComponent('HKViewOne', IOSView);

import {NativeModules} from 'react-native'
var HKViewOne = NativeModules.HKViewOne;
HKViewOne.changeTitle('我来了');

export default class IOSView extends Component {
    render() {
        return (
            <HKView style={{
                flex: 1
            }}>
                <Text
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'green'
                    }}
                >123</Text>
            </HKView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});
