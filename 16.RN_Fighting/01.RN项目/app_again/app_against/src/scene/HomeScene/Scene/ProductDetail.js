import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import {WebView} from 'react-native-webview'

export default class ProductDetail extends Component {

    static navigationOptions = ({navigation}) => {
        let {params} = navigation.state;
        let {model} = params;
        let {item} = model;
        return {
            title: item.name
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        let {params} = this.props.navigation.state;
        let {model} = params;
        let {item} = model;
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: item.html_url}}
                    startInLoadingState={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
