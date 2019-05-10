import React from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class NavigationBar {
    static getBackButton(callback) {
        return (
            <TouchableOpacity
                onPress={callback}
            >
                <View style={{
                    marginLeft: 20
                }}>
                    <Icon name="arrow-circle-o-left" size={25} color="black"/>
                </View>
            </TouchableOpacity>
        )
    }
}
