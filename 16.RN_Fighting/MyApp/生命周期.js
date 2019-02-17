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
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    Button
} from 'react-native';

// Props 属性，都是只读属性，只能外面传递进来
// state 状态，每个组件有一个系统的setState方法来改变状态，而且刷新界面，调用的就是render函数

// compoenntWillMount viewWillAppear 即将显示调用

export default class MyApp extends Component {

    state = {
        title: '默认值',
        person: 'Sara'
    }

    static defaultProps = {
        age: 18
    }

    // 1.
    componentWillMount() {
        console.log('componentWillMount来了')
    }

    // 2.刷新UI的
    render() {
        return (
            <View ref="topView" style={styles.container}>
                {/*{console.log('render来了')}*/}
                <Text>{this.state.person}</Text>
                <Text>{this.props.age}</Text>
                <Button
                    title={'我是button'}
                    color={'red'}
                    onPress={()=>{
                        this.click('点击')
                    }}
                />
            </View>
        );
    }

    // 3.网络请求在UI刷新完毕之后
    componentDidMount() {
        console.log('componentDidMount来了')
    }

    // 4.刷新UI之后调用，第一次加载UI不来
    componentDidUpdate() {
        console.log('componentDidUpdate来了')
    }

    click(e) {
        this.setState({
            title: e
        })

        // 拿到view
        console.log(this.refs.topView);
    }
}

// 这里面不能直接使用状态机，要改也可以，当作参数传递出来
const btnClick = ()=>{
    Alert.alert('哥们，我来了')
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('MyApp', () => MyApp);
