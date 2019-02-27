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
    View
} from 'react-native';

import Main from './Component/HKMain'

export default class ATEST extends Component {
    render() {
        return (
            <View></View>
        );
    }
}

AppRegistry.registerComponent('ATEST', () => ATEST);
