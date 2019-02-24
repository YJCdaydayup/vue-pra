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
    TabBarIOS
} from 'react-native';

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // 默认被选中的Item
            selectedTabBarItem: 'home'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    }}>
                    <Text>Tabbar练习</Text>
                </View>
                <TabBarIOS
                    // bar的颜色
                    barTintColor={'black'}
                    // 选中的文字的颜色
                    tintColor={'purple'}
                >
                    <TabBarIOS.Item
                        // 系统的默认文字，会优先选这个，要用自己的就必须把这个注释掉
                        // systemIcon="contacts"
                        title="首页"
                        badge={'3'}
                        selected={this.state.selectedTabBarItem === 'home'}
                        onPress={()=> {
                            this.setState({
                                selectedTabBarItem: 'home'
                            });
                        }}
                    >
                        {/*每个Item下必须有一个子控制器View*/}
                        <View style={[styles.commonViewStyle, {backgroundColor: 'red'}]}>
                            <Text>首页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="bookmarks"
                        selected={this.state.selectedTabBarItem === 'first'}
                        onPress={()=> {
                            this.setState({
                                selectedTabBarItem: 'first'
                            });
                        }}
                    >
                        <View style={[styles.commonViewStyle, {backgroundColor: 'green'}]}>
                            <Text>第一页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="downloads"
                        selected={this.state.selectedTabBarItem === 'second'}
                        onPress={()=> {
                            this.setState({
                                selectedTabBarItem: 'second'
                            });
                        }}
                    >
                        <View style={[styles.commonViewStyle, {backgroundColor: 'yellow'}]}>
                            <Text>第二页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="search"
                        selected={this.state.selectedTabBarItem === 'third'}
                        onPress={()=> {
                            this.setState({
                                selectedTabBarItem: 'third'
                            });
                        }}
                    >
                        <View style={[styles.commonViewStyle, {backgroundColor: 'orange'}]}>
                            <Text>第三页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="search"
                        selected={this.state.selectedTabBarItem === 'forth'}
                        onPress={()=> {
                            this.setState({
                                selectedTabBarItem: 'forth'
                            });
                        }}
                    >
                        <View style={[styles.commonViewStyle, {backgroundColor: 'green'}]}>
                            <Text>第三页</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    commonViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
