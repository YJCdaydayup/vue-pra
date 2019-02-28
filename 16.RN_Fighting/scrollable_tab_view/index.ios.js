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

export default class scrollable_tab_view extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: ((r1, r2)=>r1 !== r2)
            }),
            base_url: 'http://api.budejie.com/api/api_open.php?a=list&c=data&type=29'
        }
    }

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
                <View style={styles.cellStyle}>
                   <View style={styles.topStyle}>
                       <Image
                           source={{uri: rowData.profile_image}}
                           style={{width: 40, height: 40}}
                       />
                       <Text style={styles.nameStyle}>{rowData.name}</Text>
                   </View>
                    <View>
                        <Text style={styles.textStyle}>{rowData.text}</Text>
                    </View>
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
        fetch(this.state.base_url).then((response)=>response.json()).then((res)=> {
            var jsonData = res.list;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(jsonData)
            })
        })
    }
}

const styles = StyleSheet.create({
    cellStyle: {},
    nameStyle: {},
    textStyle: {},
    topStyle: {}
});

AppRegistry.registerComponent('scrollable_tab_view', () => scrollable_tab_view);
