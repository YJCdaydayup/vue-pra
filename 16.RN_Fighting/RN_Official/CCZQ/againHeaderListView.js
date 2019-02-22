import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

let Cars = require('./Car.json');

export default class HeaderList extends Component {

    constructor(props) {
        super(props);
        let getSectionHeaderData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        let getRowData = (dataBlob, sectionID, rowID) => {
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

    _renderRow(rowData, sectionID, rowID) {
        let data = Cars.data;
        let style;
        if (rowID === data[sectionID].cars.length - 1) {
            style = {borderBottomWidth: 0}
        }else {
            style = {borderBottomWidth: 1};
        }

        return (
            <View style={[styles.cellStyle, style]}>
                <Image
                    style={styles.imageStyle}
                    source={{uri: rowData.icon}}
                />
                <Text>{rowData.name}</Text>
            </View>
        )
    }

    _renderSectionHeader(text) {
        return (
            <View
                style={styles.headerStyle}
            >
                <Text style={{fontSize: 18}}>{text}</Text>
            </View>
        );
    }

    componentDidMount() {
        this._loadData();
    }

    _loadData() {
        let data = Cars.data;
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [];
        for (var i = 0; i < data.length; i++) {
            sectionIDs.push(i);
            dataBlob[i] = data[i].title;
            rowIDs[i] = [];
            var cars = data[i].cars;
            for (var j = 0; j < cars.length; j++) {
                rowIDs[i].push(j);
                dataBlob[i + ':' + j] = cars[j];
            }
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    headerStyle: {
        padding: 10,
        backgroundColor: '#f3f4f5'
    },
    cellStyle: {
        padding: 10,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle: {
        width: 80,
        height: 80,
        marginRight: 10
    }
});
