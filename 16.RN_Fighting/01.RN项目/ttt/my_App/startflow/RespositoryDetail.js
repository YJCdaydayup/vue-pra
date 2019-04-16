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
    WebView,
    DeviceEventEmitter
} from 'react-native';

import PropTypes from 'prop-types'
import ViewUtils from './../common/ViewUtil'

const notice = 'notice'

export default class RespositoryDetail extends Component {

    static navigationOptions = ({navigation}) => {
        let {state} = navigation;
        let {params} = state;
        let data = params.params;
        return {
            headerTitle: data.full_name,
            headerTitleStyle: {
                color: "#fff"
            },
            headerLeft: (
                ViewUtils.getLeftButton(()=> {
                    DeviceEventEmitter.emit(notice)
                })
            )
        }
    }

    constructor(props) {
        super(props);
        this.canGoBack = false;
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this)
    }

    componentWillMount() {
        DeviceEventEmitter.addListener(notice, ()=> {
            if (this.canGoBack) {
                this.webView.goBack();
            }else {
                this.props.navigation.goBack();
            }
        })
    }

    render() {
        let {state} = this.props.navigation;
        let {params} = state;
        let data = params.params;
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: data.html_url}}
                    onNavigationStateChange={this.onNavigationStateChange}
                    ref={(webView)=>this.webView = webView}
                    startInLoadingState={true}
                />
            </View>
        )
    }
    onNavigationStateChange(e) {
        this.canGoBack = e.canGoBack;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
