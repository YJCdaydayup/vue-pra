/**
 * Created by yangli on 2019/3/3.
 */
/**
 * Created by yangli on 2019/3/3.
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
    Platform,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

import Dimensions from 'Dimensions'
const {width,height} = Dimensions.get('window');

import request from './../common/request'

import Icon from 'react-native-vector-icons/Ionicons'

// mockjs解析随机数据
import Mock from 'mockjs'

export default class list extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: ((r1, r2)=>(r1 !== r2))
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        视频列表
                    </Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    onEndReached={this._fetchMoreData}
                    onEndReachedThrehold={20}
                />
            </View>
        );
    }

    _fetchMoreData = () => {
        if (!this._hasMore()) {
            return ;
        }
        
    }

    _hasMore = ()=>{

    }

    _renderRow = (rowData)=> {
        return (
            <TouchableOpacity
            >
                <View style={styles.cellStyle}>
                    <Text style={styles.title}>{rowData.title}</Text>
                    <Image
                        style={styles.thumb}
                        source={{uri: rowData.thumb}}
                    >
                        <Icon name="ios-play"
                              size={30}
                              style={styles.play}
                        />
                    </Image>
                    <View style={styles.cellFooter}>
                        <View style={styles.footerBox}>
                            <Icon name="ios-heart"
                                  size={30}
                                  style={styles.boxIcon}
                            />
                            <Text style={styles.boxText}>点赞</Text>
                        </View>
                        <View style={styles.footerBox}>
                            <Icon name="ios-chatbubbles-outline"
                                  size={30}
                                  style={styles.boxIcon}
                            />
                            <Text style={styles.boxText}>评论</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    componentWillMount() {
        // 加载本地数据
        this.dsFetchData();
    }

    componentDidMount() {
        // 加载网络数据
        this.fetchData();
    }

    fetchData() {
        request.get(config.api.base + config.api.list,{
            accessToken: 'aaaaaa'
        }).then((result)=>{
            if (result.succuss) {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(result.data)
                })
            }
        }).catch((err)=>{
            console.log('err' + err);
        })
    }

    dsFetchData() {
        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRows(['haha', 'hehe', 'xixi', 'heihei', 'huhu'])
        // })
        let resultArr = Mock.mock([]);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(resultArr.data);
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    header: {
        paddingTop: 25,
        paddingBottom: 15,
        backgroundColor: "#ddd",
        borderBottomWidth: 0.5,
        borderBottomColor: '#000',
        marginTop: Platform.OS === 'ios' ? 20 : 0 // 设备的判断
    },
    headerStyle: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    listView: {

    },
    cellStyle: {
        width: width,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 18,
        padding: 10,
        color: 'black',
    },
    thumb: {
        width: width,
        height: width * 720/1280,
        resizeMode: 'cover',
    },
    play: {
        position: 'absolute',
        right: 14,
        bottom: 14,
        width: 45,
        height: 45,
        paddingTop: 9,
        paddingLeft: 18,
        backgroundColor: 'transparent',
        borderColor: '#ddd',
        borderWidth: 0.5,
        borderRadius: 22.5
    },
    cellFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ddd',
    },
    footerBox: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginLeft: 1,
    },
    boxIcon: {
        fontSize: 22,
        color: '#333'
    },
    boxText: {
        fontSize: 18,
        color: '#333',
        paddingLeft: 12
    }
});
