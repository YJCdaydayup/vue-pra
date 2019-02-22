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

let Cars = require('./Car.json');

export default class CCZQ extends Component {

    constructor(props) {
        super(props);

        var getSectionHeaderData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        this.state = {
            dataSource: new ListView.DataSource({
                getSectionHeaderData: getSectionHeaderData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderSectionHeader={this._renderSectionHeader}
                />
            </View>
        );
    }

    _renderRow(rowData) {
        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={()=>{
                    this.changeData()
                }}
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

    changeData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections()
        })

    }
    _renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={{
                padding: 5,
                backgroundColor: '#f3f4f6',
                paddingLeft: 10
            }}>
                <Text>{sectionData}</Text>
            </View>
        )
    }

    componentDidMount() {
        // 数据先处理
        this.loadJson();
    }

    loadJson() {
        var jsonData = Cars.data;
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
                dataBlob, sectionIDs, rowIDs
            )
        });
    }

    concatData () {
        var jsonData = Cars.data;
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
    }
}

const styles = StyleSheet.create({
    container: {

    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        padding: 6
    },
    rowImageStyle: {
        width: 80,
        height: 80,
        marginRight: 8,
        borderRadius: 40
    }
});
