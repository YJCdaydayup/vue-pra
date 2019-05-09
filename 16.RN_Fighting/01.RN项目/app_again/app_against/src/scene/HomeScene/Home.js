import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
