import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    Image
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

    static getRightFavoriteButton(source, callback) {
        return (
            <TouchableOpacity
                onPress={callback}
            >
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: 10,
                        marginTop: -6
                    }}
                    source={source}
                />
            </TouchableOpacity>
        )
    }

    static getImgSource(isFavorite) {
        return isFavorite ? require('./../img/ic_star.png'): require('./../img/ic_unstar_transparent.png');
    }
}
