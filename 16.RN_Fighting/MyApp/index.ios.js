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
    Text,
    TextInput
} from 'react-native';

var LoginView = require('./loginView')

export default class Test3 extends Component {
    render() {
        return (
           <LoginView/>
        )
    }
}


// 输出到iOS App里面
AppRegistry.registerComponent('MyApp', () => Test3);
