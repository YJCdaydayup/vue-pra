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
    Text,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

import Test from './dome4'


// 模块里面用ES5实现方式
var Test3 = React.createClass({

    // 定义状态机有变化
    getInitialState() {
        return {
            title: '默认值'
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{
                        this.click('点击')
                    }}
                >
                    <Text>{this.state.title}</Text>
                </TouchableOpacity>
            </View>
        )
    },
    // 写在里面就是Test3的对象方法，写在外面就是全局函数
    click(ev) {
        this.setState({
            title: ev
        })
    }
})

// export default class Test3 extends Component {
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Test/>
//             </View>
//         )
//     }
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f5f7',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// 输出到iOS App里面
AppRegistry.registerComponent('MyApp', () => Test3);
