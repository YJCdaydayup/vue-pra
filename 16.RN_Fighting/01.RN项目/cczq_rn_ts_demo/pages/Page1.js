/**
 * Created by yangli on 2019/3/31.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    RefreshControl,
    ActivityIndicator
} from 'react-native';

const CITY_NAMES = ['北京','上海','惠州','深圳','广州','武汉'];

export default class Page1 extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'green'
        },
        headerTitle: 'ListView'
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataArray: CITY_NAMES
        }

        this.loadData = this.loadData.bind(this)
    }

    _renderItem(data) {
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{data.item}</Text>
            </View>
        )
    }

    loadData(refreshing) {
        if (refreshing) {
            this.setState({
                isLoading: true
            },()=>{
                setTimeout(()=>{
                    let dataArray = [];
                    for (let i=this.state.dataArray.length -1 ;i>=0;i--){
                        dataArray.push(this.state.dataArray[i]);
                    }
                    this.setState({
                        dataArray: dataArray,
                        isLoading: false
                    })
                },2000)
            });
        }else {
           setTimeout(function () {
               let arr = this.state.dataArray;
               this.setState({
                   dataArray: arr.concat(['新疆'])
               })
           },2000)
        }
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                {/*<FlatList*/}
                    {/*data={this.state.dataArray}*/}
                    {/*renderItem={this._renderItem}*/}
                    {/*// refreshing={this.state.isLoading}*/}
                    {/*// onRefresh={()=>{*/}
                       {/*// this.loadData()*/}
                    {/*// }}*/}
                    {/*refreshControl= {*/}
                        {/*<RefreshControl*/}
                            {/*title={'Loading'}*/}
                            {/*titleColor={'red'}*/}
                            {/*onRefresh={()=>{*/}
                                {/*this.loadData(true)*/}
                            {/*}}*/}
                            {/*refreshing={this.state.isLoading}*/}
                        {/*/>*/}
                    {/*}*/}
                    {/*ListFooterComponent={()=>{*/}
                        {/*return (*/}
                           {/*<View style={styles.indicatorContainer}>*/}
                               {/*<ActivityIndicator*/}
                                   {/*size={'large'}*/}
                                   {/*animating={true}*/}
                                   {/*color={'red'}*/}
                               {/*/>*/}
                               {/*<Text style={styles.indicator}>正在加载更多...</Text>*/}
                           {/*</View>*/}
                        {/*)*/}
                    {/*}}*/}
                    {/*onEndReached={this.loadData(false)}*/}
                {/*/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    item: {
        backgroundColor: '#169',
        height: 100,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    indicatorContainer: {
        alignItems: 'center'
    },
    indicator: {
        color: 'red'
    }
});
