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
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

let hores = require('./heros.json');
let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

export default class Test extends Component {

    // 构造函数，在里面定义state状态机，这是最严谨的写法
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        // 数据源放在state里面，数据改变刷新UI
        this.state = {
            dataSource: ds.cloneWithRows(hores)
        }
    }

    render() {
        return (
            <ListView
                style={{
                    marginTop: 44
                }}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

    // 返回具体的cell
    // rowData就是数组源中的某一个对象
    renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={()=>{
                    AlertIOS.alert('购买成功','成功解锁某某英雄' + rowData.name + '英雄')
                }}
            >
                <View style={styles.cellViewStyle}>
                    <Image
                        source={{uri: rowData.image}}
                        style={styles.leftImageStyle}
                    />
                    <View style={styles.rightViewStyle}>
                        <Text
                            style={styles.topTitleStyle}
                        >{rowData.name}</Text>
                        <Text
                            numberOfLines={3}
                            style={styles.bottomTitleStyle}
                        >{rowData.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cellViewStyle: {
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        padding: 10,
        flexDirection: 'row'
    },
    leftImageStyle: {
        width: 60,
        height: 60
    },
    rightViewStyle: {
        marginLeft: 15
    },
    topTitleStyle: {
        fontSize: 20,
        marginBottom: 8
    },
    bottomTitleStyle: {
        width: width * 0.7
    }
});
