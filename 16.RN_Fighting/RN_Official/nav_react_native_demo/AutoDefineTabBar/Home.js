import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    AlertIOS
} from 'react-native';

export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
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
