/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var dimension = require('Dimensions');

let data = require('./Data.json');

let deviceWidth = dimension.get('window').width
let bWidth = 100
let cols = 3
let vspace = (deviceWidth - bWidth * cols) / (cols+1)
let hspace = 20

export default class MyApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderDataItems()}
            </View>
        )
    }

    renderDataItems() {
        let items = [];
        for (var i = 0; i < data.length; i++) {
            let item = data[i];
            console.log(item.icon)
            items.push(
                <View class="bg" style={styles.innerBgStyle} key={i}>
                    <Image
                        style={styles.imageStyle}
                        source={{uri: item.icon}}
                    />
                    <Text style={{textAlign: 'center'}}>{item.name}</Text>
                </View>
            )
        }
        return items;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f4f3",
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 20
    },
    innerBgStyle: {
        marginLeft: vspace,
        marginTop: hspace,
        width: bWidth
    },
    imageStyle: {
        width: 80,
        height: 80
    },
    bg: {
        backgroundColor: 'red'
    }
});

AppRegistry.registerComponent('MyApp', () => MyApp);
