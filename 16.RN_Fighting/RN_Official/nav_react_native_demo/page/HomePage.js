import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    AlertIOS
} from 'react-native';

import LogoTitle from './../NavHeaderComponent/LogoTitle'
import LeftButton from './../NavHeaderComponent/LeftButton'

export default class HomePage extends Component {

    // 有单独自己的导航样式就用自己的，没有就用通用的样式
    static navigationOptions = {
        title: 'Home',
        // headerTitle: <LogoTitle title="123"/>,
        headerLeft: null
        // headerStyle: {
        //     backgroundColor: 'orange'
        // },
        // headerTintColor: 'red',
        // headerTitleStyle: {
        //     color: 'green'
        // }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Page</Text>
                <Button
                    title="我是按钮"
                    onPress={()=>{
                        this.props.navigation.navigate('Detail',{
                            itemID: 88,
                            otherParam: 'anything you want here!!!'
                        });
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    headerStyle: {
        backgroundColor: 'orange'
    }
});
