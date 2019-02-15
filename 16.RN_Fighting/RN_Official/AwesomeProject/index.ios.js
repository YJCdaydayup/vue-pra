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

let LoginView = require('./loginView')

export default class AwesomeProject extends Component {
  render() {
    return (
      <LoginView/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
