import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    RefreshControl,
    Text
} from 'react-native'

import HomeHandler from './handler/HomeHandler'
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
      this._loadData();
    }

    _loadData() {
        this.updateState({
            isLoading: true
        },()=>{
            HomeHandler.LSCGetMainListData(this.genUrl()).then(items => {
                this.updateState({
                    isLoading: false,
                    dataArray: items
                }, ()=>{
                    this.forceUpdate()
                })
            })
        })
    }

    updateState(dic, callback) {
        if (!(this && dic)) return;
        this.setState(dic,callback);
    }

    genUrl() {
        return MAIN_LIST_API + 'iOS' + MAIN_TAIL;
    }

    _keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={this._renderItemView}
                    keyExtractor={this._keyExtractor}
                    ListFooterComponent={this._getFooterComponent}
                />
            </View>
        )
    }

    _getFooterComponent() {
        return this.state.isLoading? <FlatListFooterComponent/>: null
    }

    _renderItemView(rowData) {
        let {item} = rowData;
        return (
            <HomeCell homeModel={item} onFavorite={this._onFavorite.bind(this)} callback={this._clickCellEvent.bind(this)}/>
        )
    }

    _onFavorite(isFavorite, item) {
        if (isFavorite) {
            HomeHandler.addFavoriteItem(item.id.toString(), item)
        }else {
            HomeHandler.removeFavoriteItem(item.id.toString())
        }
    }

    _clickCellEvent(model) {
        this.props.navigation.navigate('ProductDetail', {
            model: model,
            backEvent: this._refreshPage.bind(this)
        })
    }

    _refreshPage() {
        this.updateState({
            isLoading: true
        },()=>{
            HomeHandler.LSCGetMainListData(this.genUrl()).then(items => {
                this.forceUpdate()
                this.updateState({
                    isLoading: false,
                    dataArray: items
                }, ()=>{
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
