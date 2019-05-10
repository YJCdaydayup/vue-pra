import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    RefreshControl
} from 'react-native'

import HomeHandler from './handler/HomeHandler'
import HomeCell from './cell/HomeCell'
import {MAIN_LIST_API, MAIN_TAIL} from './../../api/mainApi'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: []
        }
        this._renderItemView = this._renderItemView.bind(this)
    }

    componentDidMount() {
        HomeHandler.LSCGetMainListData(this.genUrl()).then(items => {
            this.updateState({
                dataArray: items
            }, ()=>{

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
                    
                />
            </View>
        )
    }

    _renderItemView(rowData) {
        let {item} = rowData;
        return (
            <HomeCell homeModel={item} callback={this._clickCellEvent.bind(this)}/>
        )
    }

    _clickCellEvent(model) {
        this.props.navigation.navigate('ProductDetail', {
            model: model
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
