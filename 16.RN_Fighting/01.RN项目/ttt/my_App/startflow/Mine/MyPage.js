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

import {FLAG_LANGUAGE} from './../../common/LanguageDao'

export default class MyPage extends Component {

    constructor(props) {
        super(props);
        this._push = this._push.bind(this);
        this._showSortKey = this._showSortKey.bind(this);
        this._remove = this._remove.bind(this);
        this._registerLanuage = this._registerLanuage.bind(this);
        this._showSortLanuage = this._showSortLanuage.bind(this);
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
                <Text
                    onPress={this._registerLanuage}
                >订阅语言</Text>
                <Text
                    onPress={this._showSortLanuage}
                >SortKeys</Text>
            </View>
        );
    }

    _remove() {
        this.props.navigation.navigate('AutoLabel', {
            params: {
                ...this.props,
                isRemoveKey: true,
                flag: FLAG_LANGUAGE.flag_key
            }
        });
    }

    _push() {
        this.props.navigation.navigate('AutoLabel', {
            params: {
                ...this.props,
                isRemoveKey: false,
                flag: FLAG_LANGUAGE.flag_key
            }
        });
    }

    _showSortKey() {
        this.props.navigation.navigate('SortKeyPage',{
            flag: FLAG_LANGUAGE.flag_key
        });
    }

    _registerLanuage() {
        this.props.navigation.navigate('AutoLabel', {
            params: {
                ...this.props,
                isRemoveKey: false,
                flag: FLAG_LANGUAGE.flag_language
            }
        });
    }

    _showSortLanuage() {
        this.props.navigation.navigate('SortKeyPage',{
            flag: FLAG_LANGUAGE.flag_language
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
