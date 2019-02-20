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

import TestListView from './TestListView'

export default class Test extends Component {
  render() {
    return (
        <TestListView/>
    );
  }
}

AppRegistry.registerComponent('Test', () => Test);
