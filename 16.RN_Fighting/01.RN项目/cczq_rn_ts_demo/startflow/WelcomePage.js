/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ListView,
    RefreshControl
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'

import NavgationBar from './../NavgationBar'

import HttpUtil from './../common/HttpUtil'

const URL = 'https://api.github.com/search/repositories?q='
const QUERY_STR = '&sort=stars'

import Respository from './RepositoryCell'

export default class WelcomePage extends Component {

    render() {

        let {navigation} = this.props;

        return (
            <View style={styles.container}>
                {/*<NavgationBar title="最新"/>*/}
                <ScrollableTabView
                    tabBarBackgroundColor="#2196F3"
                    tabBarInactiveTextColor="mintcream"
                    tabBarActiveTextColor="#fff"
                    tabBarUnderlineStyle={{backgroundColor: "#fff", height: 2}}
                    renderTabBar={()=> {
                        return (
                            <ScrollableTabBar/>
                        )
                    }}
                >
                    <PopularTab tabLabel="Java" nav={navigation}>JAVA</PopularTab>
                    <PopularTab tabLabel="iOS" >iOS</PopularTab>
                    <PopularTab tabLabel='Andriod' >Andriod</PopularTab>
                    <PopularTab tabLabel='JavaScript' >JavaScript</PopularTab>
                </ScrollableTabView>
            </View>
        )
    }
}

class PopularTab extends Component {

    static propTypes = {
        tabLabel: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.state = {
            data: '',
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2)=>r1 !== r2
            }),
            isLoading: false
        }
        this.baseUrl = 'https://api.github.com/search/repositories?q=ios&sort=stars';
        this._onLoad = this._onLoad.bind(this)
        this._clickEvent = this._clickEvent.bind(this)
        this._renderRow = this._renderRow.bind(this)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    refreshControl={<RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={this._onLoad}
                        tintColor='#2196F3'
                        colors={['#2196F3']}
                        titleColor='#2196F3'
                        title='loading...'
                    />}
                />
            </View>
        )
    }

    _renderRow(rowData) {
        return (
            <Respository
                rowData={rowData}
                clickEvent={this._clickEvent}
                navigation={this.props.nav}
            />
        )
    }

    _clickEvent() {
        alert('123')
        // this.props.navigation.navigate('AsyncLocalStorage')
    }

    componentDidMount() {
        this._onLoad();
    }

    genUrl(key) {
        return URL + key + QUERY_STR;
    }

    _onLoad() {
        this.setState({
            isLoading: true
        },()=>{
            let url = this.genUrl(this.props.tabLabel);
            HttpUtil.get(url).then(result => {
                this.setState({
                    isLoading: false,
                    dataSource: this.state.dataSource.cloneWithRows(result.items)
                })
            }).catch(err=> {
                console.log(err);
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
