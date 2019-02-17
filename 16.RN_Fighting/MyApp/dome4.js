/**
 * Created by yangli on 2019/2/16.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    // AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

export default class dome4 extends Component {

    // 状态机
    state = {
        title: '默认值'
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.1}
                    onPress={()=> {
                        this.click('点击')
                    }}
                    onPressIn={()=> {
                        this.click('按下')
                    }}
                    onPressOut={()=> {
                        this.click('抬起')
                    }}
                    onLongPress={()=> {
                        this.click('长按')
                    }}
                >
                    <View>
                        <Text>{this.state.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    click(event) {
        // console.log(e)
        // AlertIOS.alert('来了')
        this.setState({
            title: event
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f5f7'
    }
});
