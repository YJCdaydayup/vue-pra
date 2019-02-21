/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window')

import TestScrollView from './myScrollView'
import TestListView from './myListView'

export default class CCZQ extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TestScrollView/>
        <TestListView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('CCZQ', () => CCZQ);
