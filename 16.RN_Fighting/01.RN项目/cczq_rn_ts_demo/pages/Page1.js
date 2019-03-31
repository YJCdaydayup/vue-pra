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

export default class Page1 extends Component {
    render() {

        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <Text>欢迎来到page1</Text>
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
                                tintColor: 'orange',
                                updateTime: new Date().getTime()
                            }
                        })
                    }}
                />
                <Button
                    title="tab2"
                    onPress={()=>{
                        navigation.navigate('Page2')
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
