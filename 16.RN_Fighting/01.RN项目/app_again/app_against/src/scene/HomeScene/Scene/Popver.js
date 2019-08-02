import React, {Component} from 'react';
import {Text} from 'react-native';

import {NavigationPage} from 'teaset';
import Popover from "teaset/components/Popover/Popover";

export default class Popver extends Component {

    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: 'Toast',
        showBackButton: true,
        navigationBarInsets: false
    };

    static showPoper() {
        return <Popver/>
    }

    render() {
        return (
            <Popover style={{
                width: 200,
                height: 200,
            }} arrow={'top'} paddingCorner={20}>
                <Text style={{
                    width: 200,
                    height: 200,
                    fontSize: 16,
                    padding: 10,
                }}>acascssacsacacascsaca</Text>
            </Popover>
        );
    }
}
