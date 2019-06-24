import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Modal,
    TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types'
import ThemeFactory,{ThemeFlags} from './../../../common/ThemeFactory'

const {width, height} = require('Dimensions').get('window');


export default class ThemePage extends Component {

    static propTypes = {
        visible: PropTypes.bool,
        onClose: PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    updateState(dic, callback) {
        if (!this) return;
        this.setState(dic, callback);
    }

    genThemeItem(key) {
        return (
            <TouchableOpacity
                onPress={()=>{
                    this.selectTheme(key)
                }}
            >
                <Text
                    keyExtractor={key}
                    style={[styles.text, {backgroundColor: ThemeFlags[key]}]}>{ThemeFlags[key]}</Text>
            </TouchableOpacity>
        )
    }

    selectTheme(key) {
        ThemeFactory.saveTheme(ThemeFlags[key])
        this.props.onClose();
    }

    createThemeItems() {
        let views = [];
        let keys = Object.keys(ThemeFlags);
        for (let i = 0; i < keys.length; i += 3) {
            let key1 = keys[i];
            let key2 = keys[i + 1];
            let key3 = keys[i + 2];
            views.push(
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    {this.genThemeItem(key1)}
                    {this.genThemeItem(key2)}
                    {this.genThemeItem(key3)}
                </View>
            )
        }
        return views;
    }

    render() {
        return (
            this.props.visible ? <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.visible}
                onRequestClose={() => {

                }}
            >
                <View style={{flex: 1}}>
                    <ScrollView>
                        {this.createThemeItems()}
                    </ScrollView>
                </View>
            </Modal> : null
        )
    }
}

const styles = StyleSheet.create({
    text: {
        width: width * 0.3,
        height: width * 0.3,
        marginLeft: width * 0.1 * 0.25,
        marginTop: width * 0.1 * 0.25,
        borderRadius: 5,
        shadowColor: 'gray',
        shadowOpacity: 0.6,
        shadowOffset: {width: 2, height: 2},
        textAlign: 'center',
        lineHeight: width * 0.3
    }
});
