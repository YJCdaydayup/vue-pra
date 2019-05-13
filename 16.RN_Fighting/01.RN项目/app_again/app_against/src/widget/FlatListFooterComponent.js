import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native'

export default class FlatListFooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    color="gray"
                    size="small"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'red'
    }
})