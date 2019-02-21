import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

let heros = require('./heros.json');
let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

export default class CCZQ extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(heros)
        }
    }

    render() {
        return (
            <ListView
                style={styles.listViewStyle}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        );
    }

    _renderRow(rowData, sectionId, rowId) {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>{
                    AlertIOS.alert('购买成功','成功激活'+rowData.name+'角色')
                }}
            >
                <View style={styles.rowViewStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={{uri: rowData.image}}
                    />
                    <View style={styles.textViewStyle}>
                        <Text
                            style={styles.nameStyle}
                        >{rowData.name}</Text>
                        <Text
                            style={styles.titleStyle}
                            numberOfLines={3}
                        >{rowData.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listViewStyle: {

    },
    rowViewStyle: {
        padding: 10,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 0.5,
        flexDirection: 'row'
    },
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    textViewStyle: {
        marginLeft: 8,
        flex: 1
    },
    nameStyle: {
        fontSize: 18,
        marginBottom: 6
    },
    titleStyle: {}
});
