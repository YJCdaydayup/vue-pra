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
    TextInput,
    Button
} from 'react-native';

import {StackNavigator} from 'react-navigation'

const App = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen}
})

export default class MyApp extends Component {
    static navigationOptions = {
        title: 'Welcome'
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to Jane's Profile"
                onPress={()=>{
                    navigate('Profile',{name: 'jane'})
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f4f3",
        marginTop: 100
    }
});

AppRegistry.registerComponent('MyApp', () => MyApp);
