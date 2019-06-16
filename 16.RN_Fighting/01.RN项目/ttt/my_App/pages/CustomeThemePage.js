/**
 * Created by yangli on 2019/6/15.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Modal,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import ThemeFactory, {ThemeFlags} from './../res/styles/ThemeFactory'
import ThemeDao from './../common/ThemeDao'

export default class CustomeThemePage extends Component {
    constructor(props) {
        super(props);
        this.themeDao = new ThemeDao();
        this.state = {
            visible: false
        }
    }

    getThemeItem(themeKey) {
        return <TouchableOpacity
            style={{
                flex: 1,
            }}
            underlayColor="#fff"
            onPress={()=>{
                this.themeDao.save(themeKey)
                this.setState({
                    visible: false
                })
            }}
        >
            <View style={[styles.item, {backgroundColor: ThemeFlags[themeKey]}]}>
                <Text style={styles.themeText}>{themeKey}</Text>
            </View>
        </TouchableOpacity>
    }

    renderThemeItems() {
        let views = [];
        for (let i = 0, keys = Object.keys(ThemeFlags), len = keys.length; i < len; i += 3) {
            let key1 = keys[i];
            let key2 = keys[i + 1];
            let key3 = keys[i + 2];
            views.push(
                <View style={{
                    flexDirection: 'row'
                }}>
                    {this.getThemeItem(key1)}
                    {this.getThemeItem(key2)}
                    {this.getThemeItem(key3)}
                </View>
            )
        }
        return views;
    }

    renderContentView() {
        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.visible}
                onRequestClose={()=> {

                }}
            >
                <View style={{flex: 1}}>
                    <View style={{
                        height: 60,
                        backgroundColor: 'gray'
                    }}/>
                    <ScrollView>
                        <View style={styles.box}>
                            {this.renderThemeItems()}
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    onPress={()=>{
                        this.setState({
                            visible: true
                        })
                    }}
                >主题</Text>
                {this.renderContentView()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {},
    item: {
        height: 120,
        width: 120,
        margin: 3,
        padding: 3,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.6,
        shadowRadius: 2,
        padding: 3
    },
    themeText: {
        fontSize: 16,
        color: '#fff'
    }
})