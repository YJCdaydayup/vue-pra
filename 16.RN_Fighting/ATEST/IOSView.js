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
let HKView = requireNativeComponent('HKView', null);

export default class IOSView extends Component {
    render() {
        return (
            <HKView/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
