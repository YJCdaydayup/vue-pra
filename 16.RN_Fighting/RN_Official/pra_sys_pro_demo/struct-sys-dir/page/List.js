import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Button
                    title="模态化跳转"
                    onPress={()=>{
                        this.props.navigation.push('Modal')
                    }}
                />
            </View>
        )
    }
}
