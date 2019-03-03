/**
 * Created by yangli on 2019/3/3.
 */
/**
 * Created by yangli on 2019/3/3.
 */
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

export default class account extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    账户页面
                </Text>
            </View>
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
