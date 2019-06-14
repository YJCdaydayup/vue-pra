import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    RefreshControl
} from 'react-native'

import NearByHandler from './NearByHandler/NearByHandler'
import CancelablePromise from './../../common/CancelablePromise'
import {MAIN_LIST_API, MAIN_TAIL} from './../../api/mainApi'
import HomeCell from './../HomeScene/cell/HomeCell'
import HomeHandler from './../HomeScene/handler/HomeHandler'
import FlatListFooterComponent from './../../widget/FlatListFooterComponent'

export default class NearBy extends Component {

    static defaultProps = {
        name: 'Sara'
    }

    constructor(props) {
        super(props);
        this.state = {
            searchTitle: '搜索',
            dataArray: [],
            isLoading: true,
            isRefreshing: false
        }

        this._searchAction = this._searchAction.bind(this);
        this._renderItemView = this._renderItemView.bind(this);
        this._getFooterComponent = this._getFooterComponent.bind(this);
    }

    genUrl() {
        return MAIN_LIST_API + 'iOS' + MAIN_TAIL;
    }

    componentDidMount() {
        this._loadData();
    }


    _loadData() {
        HomeHandler.LSCGetMainListData(this.genUrl()).then(items => {
            this.updateState({
                dataArray: this.state.dataArray.length > 0? this.state.dataArray.concat(items[1]):items,
                isLoading: false,
                isRefreshing: false
            })
        })
    }

    render() {
        let statusBar = <View
            style={{
                height: 44
            }}
        />

        let renderNavView = <View style={styles.navBox}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => {

                }}
                value={this.state.text}
                placeholder="请输入搜索的内容"
            />
            <TouchableOpacity
                onPress={this._searchAction}
            >
                <Text style={styles.searchTitle}>{this.state.searchTitle}</Text>
            </TouchableOpacity>
        </View>

        return (
            <View style={styles.container}>
                {statusBar}
                {renderNavView}
                <FlatList
                    data={this.state.dataArray}
                    renderItem={this._renderItemView}
                    keyExtractor={() => Math.random(2).toString()}
                    ListFooterComponent={this._getFooterComponent}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.handleRefresh.bind(this)}
                            colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                            progressBackgroundColor="#ffffff"
                        />
                    }
                />
            </View>
        )
    }

    handleRefresh() {
       this.updateState({
           isRefreshing: true
       }, () => {
           this._loadData();
       })
    }

    _getFooterComponent() {
        return this.state.isLoading? <FlatListFooterComponent/>: null
    }

    _renderItemView(rowData) {
        let {item} = rowData;
        return (
            <HomeCell homeModel={item} onFavorite={(isFavorite, item)=>{
                this._onFavorite(isFavorite, item)
            }}/>
        )
    }

    _onFavorite(isFavorite, item) {
        if (isFavorite) {
            HomeHandler.addFavoriteItem(item.id.toString(), item)
        }else {
            HomeHandler.removeFavoriteItem(item.id.toString())
        }
    }

    _searchAction() {
        if (this.state.searchTitle === '搜索') {
            this.CancelablePromise = CancelablePromise(NearByHandler.startAwaitMethod2(666))
            this.CancelablePromise.promise.then(res => {
                console.log('结果是: ' + res);
            }).catch(err => {
                console.log(err);
            })
            this.updateState({
                searchTitle: '取消'
            })
        } else {
            this.updateState({
                searchTitle: '搜索'
            })
            this.CancelablePromise.cancel();
        }
    }

    updateState(dic, callback = function () {
    }) {
        if (!this || !dic) return;
        this.setState(dic, callback)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 5,
        padding: 5,
        borderRadius: 3,
        marginRight: 10
    },
    searchTitle: {
        lineHeight: 40,
        textAlign: 'center',
        marginRight: 6
    }
})
