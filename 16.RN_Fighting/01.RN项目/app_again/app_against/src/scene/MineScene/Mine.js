import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    SectionList,
    DeviceEventEmitter
} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'
import {ACTION_HOME} from './../HomeScene/handler/HomeHandler'
import QRCode from 'react-native-qrcode-svg'
import ThemePage from './subscene/ThemePage'

let MINE_DATA = require('./data/MineData')

const icons = ['questioncircleo', 'pause', 'pausecircle', 'pausecircleo', 'clockcircle', 'customerservice'];

export default class Mine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            showQRCode: false,
            visible: false
        }
        this._createListItem = this._createListItem.bind(this);
        this._scanCoder = this._scanCoder.bind(this);
        this._onClose = this._onClose.bind(this);
    }

    render() {
        let headerView = (
            <View style={styles.header}>
                <View style={styles.boxer}>
                    <Image
                        source={{uri: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1366326655,412860124&fm=58&bpow=407&bpoh=529'}}
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={{
                            marginBottom: 16,
                            fontWeight: "500",
                            fontSize: 18
                        }}>狼</Text>
                        <Text style={{color: 'gray'}}>微信号：yangli332609</Text>
                    </View>
                </View>
                <View style={styles.scanner}>
                    <Icon name="scan1" size={20} color={'gray'}/>
                    <Text style={{
                        marginLeft: 12,
                        color: 'gray'
                    }}> > </Text>
                </View>
            </View>
        )

        return (
            <View style={styles.container}>
                <SectionList
                    style={styles.list}
                    renderSectionHeader={this.renderSectionHeader}
                    renderItem={this._createListItem}
                    sections={MINE_DATA}
                    ListHeaderComponent={headerView}
                    keyExtractor={() => Math.random(2).toString()}
                />
                {this.state.showQRCode ? <View>
                    <QRCode
                        value="http://awesome.link.qr"
                    />
                </View> : null}
                <ThemePage visible={this.state.visible} onClose={this._onClose}/>
            </View>
        )
    }

    renderSectionHeader = () => {
        return <View style={{backgroundColor: 'transparent', height: 8}}/>
    };

    _createListItem(rowData) {
        let {item, index} = rowData
        return (
            <TouchableOpacity
                onPress={() => {
                    this._clickItem(rowData)
                }}
            >
                <View>
                    <View
                        style={{
                            height: 1,
                            backgroundColor: 'transparent'
                        }}
                    />
                    <View
                        style={styles.cell}
                        onPress={() => {

                        }}
                    >
                        <Icon name={icons[index]} size={18} color={this._getRandomColor()}/>
                        <Text style={{
                            marginLeft: 12,
                            fontSize: 16,
                            marginTop: 2
                        }}>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _clickItem(rowData) {
        let {index, section} = rowData;
        let {sectionIndex, data} = section;
        DeviceEventEmitter.emit('ACTION_HOME', ACTION_HOME.ACT_ONE, {
            params: '这是params'
        });
        if (sectionIndex === 2 && index === 1) {
            this.setState({
                visible: true
            })
        }
    }

    _onClose() {
        this.setState({
            visible: false
        })
    }

    _getRandomColor() {
        return '#' +
            (function (color) {
                return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) && (color.length == 6) ? color : arguments.callee(color);
            })('');
    }

    _scanCoder() {
        this.setState({
            showQRCode: true
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        backgroundColor: 'rgba(59,59,59,0.1)'
    },
    header: {
        position: 'relative',
        paddingTop: 80,
        paddingLeft: 20,
        paddingBottom: 40,
        paddingRight: 20,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    boxer: {
        flexDirection: 'row'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 6,
        marginRight: 12
    },
    scanner: {
        position: 'absolute',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        right: 20,
        top: 115
    },
    cell: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff'
    }
})
