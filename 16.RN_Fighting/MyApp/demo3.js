/**
 * Created by yangli on 2019/2/14.
 */
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


export default class Test3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    // value="我是默认文字"
                    // multiline={true} 可以多行了，类似textarea
                    // placeholder={'我是默认'}
                    // password={true}
                    // multiline={true}
                    // clearButtonMode={true} ios独有的
                    // clearButtonMode={'always'}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        width: 300,
        height: 60,
        borderWidth: 1,
        borderColor: '#ddd'
    }
});


// 输出到iOS App里面
AppRegistry.registerComponent('MyApp', () => Test3);
