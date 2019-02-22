/**
 * Created by yangli on 2019/2/21.
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
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

let cars = require('./Car.json');

export default class Test extends Component {
    constructor(props) {
        super(props);

        var getSectionData = (dataBlob, sectionID)=> {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID)=> {
            return dataBlob[sectionID + ':' + rowID];
        };

        this.state = {
            dataSource: new ListView.dataSource(
                {
                    getSectionData: getSectionData,
                    getRowData: getRowData,
                    rowHasChanged: (r1, r2)=>r1 !== r2,
                    sectionHeaderHasChanged: (s1, s2) => s1 !== s2
                }
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>这是汽车品牌展示</Text>
                </View>
                <ListView>
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                </ListView>
            </View>
        );
    }

    renderSectionHeader(sectionData,sectionID) {
        return (
            <View>
                <Text>{sectixonData}</Text>
            </View>
        )
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity
                activeOpacity={0.6}
            >
                <View style={styles.rowStyle}>
                    <Image
                        source={{
                            uri: rowData.icon
                        }}
                        style={styles.rowImageStyle}
                    />
                    <Text>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        // 数据先处理
        this.loadJson();
    }

    loadJson() {
        var jsonData = cars.data;
        // 定义数据源需要的变量
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [], // 二维数组
            cars = [];
        // 遍历
        for (var i = 0; i < jsonData.length; i++) {
            // 组ID
            sectionIDs.push(i);
            // dataBlob
            dataBlob[i] = jsonData[i].title;
            // 取出这一组的所有车
            cars = jsonData[i].cars;
            rowIDs[i] = [];
            for (var j = 0; j < cars.length; j++) {
                // i组j行
                rowIDs[i].push(j);
                // 每一行的内容
                dataBlob[i + ':' + j] = cars[j];
            }
        }
        // 更新状态机
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(
                dataBlob,sectionIDs,rowIDs
            )
        });
    }
}

const styles = StyleSheet.create({
    container: {

    },
    rowStyle: {

    },
    rowImageStyle: {
        width: 70,
        height: 70
    }
});
