/**
 * Created by yangli on 2019/4/6.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Navigator
} from 'react-native'

import WelcomePage from './WelcomePage'

export default function setup() {
    class Root extends Component {
        render() {
            return <View style={{flex: 1,backgroundColor: 'orange'}}>
                <WelcomePage/>
            </View>
        }
    }

    return <Root/>
}

// module.exports = setup