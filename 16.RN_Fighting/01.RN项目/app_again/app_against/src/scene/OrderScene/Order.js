// ToastExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, ActivityIndicator,Text} from 'react-native';

import {NavigationPage, ListRow, Toast, Theme,Badge} from 'teaset';
import Popover from "teaset/components/Popover/Popover";

export default class ToastExample extends Component {

    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: 'Toast',
        showBackButton: true,
        navigationBarInsets: false
    };

    showModal() {
        Toast.show({
            text: 'Toast modal',
            icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
            position: 'center',
            duration: 5000,
            overlayOpacity: 0.4,
            modal: true,
        });
    }

    static customKey = null;

    showCustom() {
        if (ToastExample.customKey) return;
        ToastExample.customKey = Toast.show({
            text: 'Toast custom',
            icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
            position: 'top',
            duration: 1000000,
        });
    }

    hideCustom() {
        if (!ToastExample.customKey) return;
        Toast.hide(ToastExample.customKey);
        ToastExample.customKey = null;
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>

                <Popover style={{
                    width: 200,
                    height: 200,
                    position: 'absolute',
                    top: -40,
                    zIndex: 100000
                }} arrow={'top'} paddingCorner={20}>
                    <Text style={{
                        width: 200,
                        height: 200,
                        fontSize: 16,
                        padding: 10,
                    }}>acascssacsacacascsaca</Text>
                </Popover>

                <View style={{height: 20}} />
                <ListRow title='Message' onPress={() => Toast.message('Toast message')} topSeparator='full' />
                <ListRow title='Success' onPress={() => Toast.success('Toast success')} />
                <ListRow title='Fail' onPress={() => Toast.fail('Toast fail')} />
                <ListRow title='Smile' onPress={() => Toast.smile('Toast smile')} />
                <ListRow title='Sad' onPress={() => Toast.sad('Toast sad')} />
                <ListRow title='Info' onPress={() => Toast.info('Toast info')} />
                <ListRow title='Stop' onPress={() => Toast.stop('Toast stop')} bottomSeparator='full' />
                <View style={{height: 20}} />
                <ListRow title='Modal' onPress={() => this.showModal()} topSeparator='full' bottomSeparator='full' />
                <View style={{height: 20}} />
                <ListRow title='Show custom' onPress={() => this.showCustom()} topSeparator='full' />
                <ListRow title='Hide custom' onPress={() => this.hideCustom()} bottomSeparator='full' />
                <Popover style={{
                    width: 200,
                    height: 200
                }} arrow={'top'} paddingCorner={20}>
                    <Text style={{
                        width: 200,
                        height: 200,
                        fontSize: 16,
                        padding: 10
                    }}>acascssacsacacascsaca</Text>
                </Popover>
            </ScrollView>
        );
    }

}
