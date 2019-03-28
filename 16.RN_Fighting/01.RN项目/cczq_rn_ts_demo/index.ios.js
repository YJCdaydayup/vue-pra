/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import NavigationBar from './NavgationBar'

export default class cczq_rn_ts_demo extends Component {

    render() {
        return (
            <NavigationBar
                title="标题"
                style={{
                    backgroundColor: 'red'
                }}
                statusBar={{
                    hidden: false,
                    barStyle: 'light-content',
                    backgroundColor: '#fff'
                }}
            />
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

AppRegistry.registerComponent('cczq_rn_ts_demo', () => cczq_rn_ts_demo
)
;
