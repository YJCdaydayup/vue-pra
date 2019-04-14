/**
 * Created by yangli on 2019/3/31.
 */
/**
 * Created by yangli on 2019/3/31.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export default class Page4 extends Component {
    render() {

        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>欢迎来到page4</Text>
                <Button
                    title="DrawerOpen"
                    onPress={()=> {
                        navigation.navigate('DrawerOpen')
                    }}
                />
                <Button
                    title="DrawerToggle"
                    onPress={()=> {
                        navigation.navigate('DrawerToggle')
                    }}
                />
                <Button
                    title="Go to Page5"
                    onPress={()=> {
                        navigation.navigate('Page5')
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
