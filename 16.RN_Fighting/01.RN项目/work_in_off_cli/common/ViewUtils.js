import React from 'react'
import {
    Image,
    TouchableOpacity
} from 'react-native'

export default class ViewUtils {
    static getLeftButton(callback) {
        return (
            <TouchableOpacity
                onPress={callback}
            >
                <Image
                    source={require('./../res/images/ic_arrow_back_white_36pt.png')}
                    style={{
                        width: 26,
                        height: 26
                    }}
                />
            </TouchableOpacity>
        )
    }

    // 用数组存储，记录所有控件中，是否有状态更新
    static updateLocalArray(array, item) {
        for (let i = 0; i < array.length; i++) {
            let tm = array[i];
            if (tm === item) {
                array.splice(i,1);
                return ;
            }
        }
        array.push(item);
    }
}
