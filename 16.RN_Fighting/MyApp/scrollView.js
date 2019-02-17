/**
 * Created by yangli on 2019/2/17.
 */
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
    ScrollView
} from 'react-native';

export default class MyApp extends Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            >
                {this.renderChildView()}
            </ScrollView>
        );
    }

    // 返回子组件
    renderChildView() {
        let allChild = [];
        let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
        for (var i = 0; i < colors.length; i++) {
            allChild.push(
                <View
                    key={i}
                    style={{
                        backgroundColor: colors[i],
                        width: 375,
                        height: 120
                    }}
                >
                    <Text>i</Text>
                </View>
            )
        }
        return allChild;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('MyApp', () => MyApp);
