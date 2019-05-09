import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'


export default class NearBy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>NearBy</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
