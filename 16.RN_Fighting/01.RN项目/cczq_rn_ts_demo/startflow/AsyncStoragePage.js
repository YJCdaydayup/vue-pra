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

export default class AsyncStoragePage extends Component {

    constructor(props) {
        super(props)
        this._onSave = this._onSave.bind(this);
        this._onFetch = this._onFetch.bind(this);
        this._onRemove = this._onRemove.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=> {
                        this.text = text;
                    }}
                />
                <View style={{flexDirection: 'row'}}>
                    <Button
                        title="保存"
                        onPress={this._onSave}
                    />
                    <Button
                        title="移除"
                        onPress={this._onRemove}
                    />
                    <Button
                        title="取出"
                        onPress={this._onFetch}
                    />
                </View>
                <Toast
                    ref={(toast) => {
                        this.toast = toast;
                    }}
                />
            </View>
        );
    }

    _onSave() {
        AsyncStorage.setItem(KEY, this.text, (err)=> {
            if (!err) {
                this.toast.show('保存成功', DURATION.LENGTH_SHORT)
            } else {
                this.toast.show('保存失败', DURATION.LENGTH_SHORT)
            }
        })
    }

    _onRemove() {
        AsyncStorage.removeItem(KEY, (err)=>{
            if (!err) {
                this.toast.show('移除成功', DURATION.LENGTH_SHORT)
            } else {
                this.toast.show('移除失败', DURATION.LENGTH_SHORT)
            }
        });
    }

    _onFetch() {
        AsyncStorage.getItem(KEY, (err, result)=> {
            if (!err) {
                if (result !== '' && result !== null) {
                    this.toast.show(`取出的内容为: ${result}`);
                }else {
                    this.toast.show('不存在');
                }
            }else {
                this.toast.show('提取失败')
            }
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 36,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 20
    }
});
