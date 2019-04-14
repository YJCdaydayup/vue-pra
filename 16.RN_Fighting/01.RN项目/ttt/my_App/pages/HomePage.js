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
    Button
} from 'react-native';

export default class HomePage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>欢迎来到HomePage</Text>
                <Button
                    title="Go to Page1"
                    onPress={()=> {
                        navigation.navigate("Page1", {
                            name: '动态的'
                        });
                    }}
                />
                <Button
                    title="Go to Page2"
                    onPress={()=> {
                        navigation.navigate("Page2");
                    }}
                />

                <Button
                    title="Go to Page3"
                    onPress={()=> {
                        navigation.navigate("Page3",{
                            title: 'Devio'
                        });
                    }}
                />

                <Button
                    title="Go to TabNav"
                    onPress={()=> {
                        {/*navigation.navigate("TabNav",{*/}
                            {/*title: 'Devio'*/}
                        {/*});*/}
                        navigation.re
                    }}
                />

                <Button
                    title="Go to DrawerNavgator"
                    onPress={()=> {
                        navigation.navigate("DrawerNav");
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
