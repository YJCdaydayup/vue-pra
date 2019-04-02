import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'


export default class Page3 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f5f6'
    }
})
