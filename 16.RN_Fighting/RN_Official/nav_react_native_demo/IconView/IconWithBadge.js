import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

export default class IconWithBadge extends React.Component {
    render() {
        return (
            <View style={{width: 24, height: 24, margin: 5}}>
                <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>123</Text>
            </View>
        );
    }
}