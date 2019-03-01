import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    AlertIOS
} from 'react-native';

export default class HomePage extends Component {

    // 有单独自己的导航样式就用自己的，没有就用通用的样式
    static navigationOptions = ((options) => {
        return {
            title: 'Other',
            headerLeft: (
                <Button
                    onPress={()=>{
                        options.navigation.push('MyModal')
                    }}
                    title="Modal"
                    color="purple"
                />
            )
        }
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>Other Page</Text>
                <Button
                    title="跳转到详情"
                    onPress={this.pushAction.bind(this)}
                />
            </View>
        );
    }

    pushAction() {
        this.props.navigation.push('Detail');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
