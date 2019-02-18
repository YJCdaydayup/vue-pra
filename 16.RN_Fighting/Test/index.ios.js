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

import TestScrollView from './TestScrollView'

export default class Test extends Component {
  render() {
    return (
        <TestScrollView/>
    );
  }
}

AppRegistry.registerComponent('Test', () => Test);
