import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'


export default class Order extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Order</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
