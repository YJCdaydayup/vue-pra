/**
 * Created by yangli on 2019/3/31.
 */
/**
 * Created by yangli on 2019/3/31.
 */
/**
 * Created by yangli on 2019/3/31.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    WebView
} from 'react-native';

export default class MyWebView extends Component {
    constructor(props) {
        super(props);
        this.text = 'http://www.baidu.com';
        this.state = {
            url: '',
            title: '',
            canGoback: false
        }
        this._goBack = this._goBack.bind(this)
        this._go = this._go.bind(this);
        this._onNavigationStateChange = this._onNavigationStateChange.bind(this)

    }

    _goBack() {
        if (this.state.canGoback) {
            this.webview.goBack();
        }else {
            alert('到顶了')
        }
    }

    _go() {
        this.setState({
            url: this.text
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text
                        style={{
                            width: 36,
                            height: 40,
                            fontSize: 16,
                            lineHeight: 40,
                            textAlign: 'center'
                        }}
                        onPress={this._goBack}>返回</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={this.state.url}
                        onChangeText={(text)=>{
                            this.text = text;
                        }}
                    />
                    <Text
                        style={{
                            width: 36,
                            height: 40,
                            fontSize: 16,
                            lineHeight: 40,
                            textAlign: 'center'
                        }}
                        onPress={this._go}
                    >前往</Text>
                </View>
                <WebView
                    ref = {(webview) => {this.webview = webview}}
                    source={{uri: this.state.url}}
                    onNavigationStateChange={this._onNavigationStateChange}
                />
            </View>
        )
    }

    _onNavigationStateChange(e) {
        this.setState({
            canGoback: e.canGoBack,
            title: e.title
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        marginHorizontal: 10,
        padding: 10
    }
});
