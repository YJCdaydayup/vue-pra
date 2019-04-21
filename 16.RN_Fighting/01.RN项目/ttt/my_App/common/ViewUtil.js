/**
 * Created by yangli on 2019/4/7.
 */

import React from 'react'
import {
    TouchableOpacity,
    View,
    Button,
    Image,
    Text
} from 'react-native'

import Popover from './../parties/Popoview'

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

     getPopview(callback,title) {
        return (
            <TouchableOpacity
                ref={(obj)=> {
                    this.obj = obj
                }}
                onPress={()=> {
                    callback(this.img);
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: '#fff',
                        fontWeight: '400'
                    }}>{title}</Text>
                    <Image
                        ref={(img) => {this.img = img}}
                        source={require('./../res/images/ic_spinner_triangle.png')}
                        style={{
                            width: 12,
                            height: 12,
                            marginLeft: 5
                        }}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}