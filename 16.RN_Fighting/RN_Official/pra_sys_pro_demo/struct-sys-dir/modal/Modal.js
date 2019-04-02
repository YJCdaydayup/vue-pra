import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native'

export default class Modal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#f4f5f6',
                flex: 1,
                paddingTop: 100
            }}>
                <Button
                    style={{
                        paddingTop: 100
                    }}
                    title="进入页面"
                    onPress={this.back.bind(this)}
                />
            </View>
        )
    }

    back() {
        let {navigation} = this.props;
        let {navigate} = navigation;
        navigate('TabBar');
    }
}
