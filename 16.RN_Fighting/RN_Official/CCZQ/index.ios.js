/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TestHeaderList from './myListHeaderView'
import TestList from './myListView'
import TestScroll from './myScrollView'
import HeaderList from './againHeaderListView'

export default class CCZQ extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('CCZQ', () => CCZQ);
