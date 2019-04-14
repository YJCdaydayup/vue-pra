/**
 * Created by yangli on 2019/4/7.
 */

import React from 'react'
import {
    TouchableOpacity,
    View,
    Button,
    Image
} from 'react-native'

export default class ViewUtil {
    static getLeftButton(callback) {
        return (
            <TouchableOpacity
                style={{
                    padding: 8
                }}
                onPress={callback}
            >
                <Image
                    source={require('./../res/images/ic_arrow_back_white_36pt.png')}
                    style={{
                        width: 26,
                        height: 26,
                    }}
                />
            </TouchableOpacity>
        )
    }
}