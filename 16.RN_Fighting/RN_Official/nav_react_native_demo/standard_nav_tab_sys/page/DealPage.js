import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default class Deal extends Component {

    static navigationOptions = {
        title: 'Deal'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>我是Deal</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6f7'
    }
});
