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
    DatePickerIOS,
    AlertIOS
} from 'react-native';

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window')

import TestScrollView from './myScrollView'
import TestListView from './myListView'

export default class CCZQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenDate: (()=>{
                return new Date()
            })()
        };
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({
            chosenDate: newDate
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pickBgStyle}>
                    <Text
                        onPress={()=>{
                            this.chosenDate();
                        }}
                        style={styles.textStyle}
                    >确定</Text>
                    <DatePickerIOS
                        style={styles.datePickStyle}
                        date={this.state.chosenDate}
                        onDateChange={this.setDate}
                        mode="datetime"
                    />
                </View>
            </View>
        );
    }

    chosenDate() {
        AlertIOS.alert(this.state.chosenDate.toDateString())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    pickBgStyle: {
        position: 'absolute',
        bottom: 0,
        height: 200,
        width: width
    },
    textStyle: {
        padding: 10,
        textAlign: 'right',
        backgroundColor: '#f5f5f5',
        color: 'blue'
    },
    datePickStyle: {
        backgroundColor: '#f2f3f4'
    }
});

AppRegistry.registerComponent('CCZQ', () => CCZQ);
