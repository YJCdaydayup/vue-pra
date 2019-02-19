/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import CCZQScrollView from './CCZQScrollView'

export default class AwesomeProject extends Component {
    render() {
        return (
            <CCZQScrollView/>
        );
    }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
