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

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export default class Page3 extends Component {
    render() {

        const {navigation} = this.props;
        const {state, setParams} = navigation;
        const {params} = state;
        const showText = params.mode === 'edit'? "正在编辑":"编辑完成"
        return (
            <View style={styles.container}>
                <Text>欢迎来到page3</Text>
                <Button
                    title="Go Back"
                    onPress={()=> {
                        navigation.goBack();
                    }}
                />
                <Text>{showText}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text=> {
                        setParams({
                            title: text
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
    },
    input: {
        height: 50,
        width: 300,
        borderWidth: 1,
        marginTop: 10,
        borderColor: 'red',
        alignSelf: 'center',
        paddingLeft: 10
    }
});
