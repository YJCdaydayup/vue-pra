/**
 * Created by yangli on 2019/3/31.
 */
/**
 * Created by yangli on 2019/3/31.
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
    View,
    Button
} from 'react-native';

export default class Page2 extends Component {
    render() {

        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <Text>欢迎来到page2</Text>
                <Button
                    title="Go Back"
                    onPress={()=>{
                        navigation.goBack();
                    }}
                />
                <Button
                    title="改变主题"
                    onPress={()=>{
                        navigation.setParams({
                            theme: {
                                tintColor: 'red',
                                updateTime: new Date().getTime()
                            }
                        })
                    }}
                />
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
