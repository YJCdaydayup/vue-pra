/**
 * Created by yangli on 2019/2/28.
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
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

export default class temp extends Component {


    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity>
                <View>
                    <Image
                        source={{uri: rowData.profile_image}}
                        style={{width: 40, height: 40}}
                    />
                </View>
            </TouchableOpacity>
        )
    }


    // 发送网络请求
    componentDidMount() {
        this.loadData();
    }

    loadData() {
        // RN网络请求用Fetch
        fetch(this.state.base_url).then((response) => response.json()).then((res) => {
            var jsonData = res.list;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(jsonData)
            })
        })
    }

}

AppRegistry.registerComponent('scrollable_tab_view', () => scrollable_tab_view);
