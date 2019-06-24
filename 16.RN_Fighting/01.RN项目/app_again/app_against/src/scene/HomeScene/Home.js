import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    RefreshControl,
    Text,
    DeviceEventEmitter
} from 'react-native'

import HomeHandler, {ACTION_HOME} from './handler/HomeHandler'
import HomeCell from './cell/HomeCell'
import {MAIN_LIST_API, MAIN_TAIL} from './../../api/mainApi'
import FlatListFooterComponent from './../../widget/FlatListFooterComponent'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataArray: []
        }
        this._renderItemView = this._renderItemView.bind(this)
        this._getFooterComponent = this._getFooterComponent.bind(this)
    }

    componentDidMount() {
        DeviceEventEmitter.addListener('ACTION_HOME', (action, params) => {
            console.log(action);
            console.log(params);
        })

        this._loadData();
    }

    _loadData() {
        this.updateState({
            isLoading: true
        }, () => {
            HomeHandler.LSCGetMainListData(this.genUrl()).then(items => {
                this.updateState({
                    isLoading: false,
                    dataArray: items
                })
            })
        })
    }

    updateState(dic, callback) {
        if (!(this && dic)) return;
        this.setState(dic, callback);
    }

    genUrl() {
        return MAIN_LIST_API + 'iOS' + MAIN_TAIL;
    }

    _keyExtractor = (model, index) => model.item.id.toString() + model.isFavorite.toString();

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    // extraData={this.state}
                    data={this.state.dataArray}
                    renderItem={this._renderItemView}
                    keyExtractor={this._keyExtractor}
                    // keyExtractor={ () => Math.random(2).toString()}
                    ListFooterComponent={this._getFooterComponent}
                />
            </View>
        )
    }

    _getFooterComponent() {
        return this.state.isLoading ? <FlatListFooterComponent/> : null
    }

    _renderItemView(rowData) {
        let {item} = rowData;
        return (
            <HomeCell homeModel={item} onFavorite={this._onFavorite.bind(this)}
                      callback={this._clickCellEvent.bind(this)}/>
        )
    }

    _onFavorite(isFavorite, item) {
        if (isFavorite) {
            HomeHandler.addFavoriteItem(item.id.toString(), item)
        } else {
            HomeHandler.removeFavoriteItem(item.id.toString())
        }
    }

    _clickCellEvent(model) {
        this.props.navigation.navigate('ProductDetail', {
            model: model,
            backEvent: this._refreshPage.bind(this),
            // 可以把初始状态传递过去用于判断返回时是否需要刷新
            originalFavorite: model.isFavorite
        })
    }

    _refreshPage() {
        this.updateState({
            isLoading: true
        }, () => {
            HomeHandler.LSCGetMainListData(this.genUrl()).then(items => {
                this.updateState({
                    isLoading: false,
                    dataArray: items
                })
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
