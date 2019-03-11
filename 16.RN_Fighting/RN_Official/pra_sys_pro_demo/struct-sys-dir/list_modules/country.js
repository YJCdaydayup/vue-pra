import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    RefreshControl
} from 'react-native'

let Data = require('./../../Data.json');
let {width, height} = require('Dimensions').get('window');

import Item from './Item'
import IndicatorView from './IndicatorView'

export default class country extends Component {
    keyExtractor = (item, index) => index.toString();

    constructor(props) {
        super(props);
        this.state = {
            isActivityShowing: true,
            data: null,
            isRefreshing: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref="list"
                    data={this.state.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this._renderItem}
                    ListFooterComponent={() => {
                        return <View style={{
                            height: 20,
                            backgroundColor: 'red'
                        }}/>
                    }}
                    ItemSeparatorComponent={this._renderLine}
                    onEndReached={this._refresh}
                    onEndReachedThreshold={20}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.isRefreshing}
                />

                {/* 进来就展示加载框 */}
                <IndicatorView
                    ref='indicatorView'
                    title="请稍后..."
                    showLoading={this.state.isActivityShowing}
                />

            </View>
        )
    }

    _refresh = () => {
        // alert('onEndReached...')
    };

    _onRefresh = () => {
        this.setState({
            isRefreshing: true
        })

        setTimeout(() => {
            this.setState({
                data: this.state.data.concat(Data.data),
                isRefreshing: false
            })
        }, 2000);
    }

    // 请求数据
    componentDidMount() {
        setTimeout(() => {
            this.refs.indicatorView.hide();
            this.setState({
                data: Data.data,
                // isActivityShowing: false
            })
        }, 2000);
    }

    _renderLine = () => {
        return (
            <View
                style={{
                    marginLeft: 20,
                    height: 0.5,
                    backgroundColor: 'rgba(0,0,0,0.1)'
                }}
            />
        )
    }

    _renderItem = ({item}) => {
        return (
            <Item
                item={item}
                showItem={this._onSelect}
            />
        )
    }

    _onSelect = (title) => {
        this.props.navigation.push('VideoPlayer')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
