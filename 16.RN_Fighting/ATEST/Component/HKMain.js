/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


// import
//     ScrollableTabView,{
//     DefaultTabBar,
//     ScrollableTabBar
// } from 'react-native-scrollable-tab-view'

// 引入模块
import HKHome from './HKHome'
import HKMine from './HKMine'
import HKFind from './HKFind'
import HKMessage from './HKMessage'

export default class HKMain extends Component {
    render() {
        return (
           <View></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
