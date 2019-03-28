import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    AsyncStorage
} from 'react-native'

export default class notice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            localString: ''
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('person', (err, result) => {
            if (err) {
                alert('读取失败')
            } else {
                this.setState({
                    localString: result
                })
            }
        })
    }

    render() {
        return (
            <Text>{this.state.localString}</Text>
        )
    }
}
