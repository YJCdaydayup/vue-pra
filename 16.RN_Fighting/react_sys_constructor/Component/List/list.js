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

// 服务器不会用page做分页，一般用最后一条数据的id开始拿后面的几个数据即可

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    ListView,
    TouchableOpacity,
    ActivityIndicator,
    RefreshControl
} from 'react-native';

import Detail from './Detail'

import Item from './item'

import Dimensions from 'Dimensions'
const {width, height} = Dimensions.get('window');

import request from './../common/request'

import Icon from 'react-native-vector-icons/Ionicons'

// mockjs解析随机数据
import Mock from 'mockjs'

let cacheResults = {
    nextPage: 1,
    items: [],
    total: 0
}

export default class list extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: ((r1, r2)=>(r1 !== r2))
            }),
            isLoadingTail: false,
            isRefreshing: false
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
                    renderFooter={this._renderFooter}
                    // 下拉刷新
                    refreshControl={
                        <RefreshControl
                            // 数据回来之前要显示loading，用isRefreshing控制
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                />
            </View>
        );
    }

    _onRefresh = ()=> {
        if (!this._hasMore() || this.state.isRefreshing) {
            return;
        }

        // 加载第0页数据
        this.fetchData(0);
    };

    // 自定义Footer视图
    _renderFooter() {
        if (!this._hasMore() && this.state.total !== 0) {
            return (
                <View style={styles.loadingMore}>
                    <Text style={styles.loadingText}>没有更多数据</Text>
                </View>
            )
        }

        // 小菊花
        return (
            <ActivityIndicator
                style={
                    styles.loadingMore
                }
            />
        )

    }

    // 1.状态机:request = ''
    // 2.下拉刷新 request = 'refresh'
    // 3。加载更多 request = 'loadMore'


    _fetchMoreData = () => {
        // 正在laodingmore就不发送数据了
        if (!this._hasMore() || this.state.isLoadingTail) {
            return;
        }

        let page = cacheResults.nextPage;
        this.fetchData(page)

    }

    _hasMore = ()=> {
        return cacheResults.items.length != cacheResults.total
    }

    _renderRow = (rowData)=> {
        return (
            <Item
                rowData={rowData}
                onSelect={()=>{
                    this._pushPage(rowData);
                }}
            />
        )
    }

    componentWillMount() {
        // 加载本地数据
        this.dsFetchData();
    }

    componentDidMount() {
        // 加载网络数据
        this.fetchData(1);
    }

    fetchData(page) {

        if (page !== 0) {
            this.setState({
                isLoadingTail: true
            })
        } else {
            this.setState({
                isRefreshing: true
            })
        }

        this.setState({
            isLoadingTail: true
        })
        request.get(config.api.base + config.api.list, {
            accessToken: 'aaaaaa',
            page: page
        }).then((result)=> {
            if (result.succuss) {
                let items = cacheResults.items.slice();
                if (page !== 0) {
                    items = items.concat(result.data);
                    cacheResults.nextPage += 1;
                } else {
                    items = result.data.concat(items);
                }

                // 将服务器得到的数据缓存
                cacheResults.items = items;
                cacheResults.total = result.total;
                if (page !== 0) {
                    this.setState({
                        dataSource: cacheResults.items,
                        isLoadingTail: false
                    })
                } else {
                    this.setState({
                        dataSource: cacheResults.items,
                        isRefreshing: false
                    })
                }
            }
        }).catch((err)=> {
            // 网络出错

            if (page !== 0) {
                this.setState({
                    isLoadingTail: false
                })
            } else {
                this.setState({
                    isRefreshing: false
                })
            }

            console.log('err' + err);
        })
    }

    dsFetchData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(['haha', 'hehe', 'xixi', 'heihei', 'huhu'])
        })
        let resultArr = Mock.mock([]);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(resultArr.data);
    })
    }

    _pushPage() {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
                params: {

                }
            })
        }
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
    listView: {},
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
        height: width * 720 / 1280,
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
    }
});
