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
    AsyncStorage
} from 'react-native';

const KEY = 'text';

import Toast, {DURATION} from 'react-native-easy-toast'

export default class MyPage extends Component {

    constructor(props) {
        super(props);
        this._push = this._push.bind(this);
        this._showSortKey = this._showSortKey.bind(this);
        this._remove = this._remove.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    onPress={this._push}
                >MyPage</Text>
                <Text
                    onPress={this._showSortKey}
                >SortKeys</Text>
                <Text
                    onPress={this._remove}
                >标签移除</Text>
            </View>
        );
    }

    _remove() {
        this.props.navigation.navigate('AutoLabel', {
            params: {
                ...this.props,
                isRemoveKey: true
            }
        });
    }

    _push() {
        this.props.navigation.navigate('AutoLabel', {
            params: {
                ...this.props,
                isRemoveKey: false
            }
        });
    }

    _showSortKey() {
        this.props.navigation.navigate('SortKeyPage');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
