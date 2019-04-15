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
    RefreshControl,
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native';

import Toast, {DURATION} from 'react-native-easy-toast'

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'

import NavgationBar from './../NavgationBar'

import HttpUtil from './../common/HttpUtil'

import LanguageDao, {FLAG_LANGUAGE} from './../common/LanguageDao'

const URL = 'https://api.github.com/search/repositories?q='
const QUERY_STR = '&sort=stars'

import Respository from './RepositoryCell'

import DataRepository from './../expand/DataRepository'

export default class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state = {
            dataArray: []
        }
    }

    componentDidMount() {

        this.linstener = DeviceEventEmitter.addListener('showToast', (text)=> {
            this.toast.show(text, DURATION.LENGTH_SHORT);
        })
        this.loadData()
    }

    componentWillUnmount() {
        // 移除通知
        this.linstener && this.linstener.remove();
    }

    loadData() {
        this.languageDao.fetch().then((data)=> {
            this.setState({
                dataArray: data
            })
        }).catch((error)=> {
            console.log(error);
        });
    }

    render() {
        let {navigation} = this.props;
        let {dataArray} = this.state;
        return (
            dataArray.length > 0 ?
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
                        {this.state.dataArray.map((item, index)=> {
                            return (
                                item.checked ? <PopularTab key={index} tabLabel={item.name}
                                                           nav={navigation}>{item.name}</PopularTab> : null
                            )
                        })}
                    </ScrollableTabView>
                </View> : null
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
        this.dataRepository = new DataRepository();
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
                <Toast ref={(toast)=> {
                    this.toast = toast
                }}/>
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
        }, ()=> {
            let url = this.genUrl(this.props.tabLabel);

            // AsyncStorage.removeItem(url, (err) =>{
            this.dataRepository.fetchRepository(url).then(result => {
                let items = result && result.items ? result.items : result ? result : []
                this.setState({
                    isLoading: false,
                    dataSource: this.state.dataSource.cloneWithRows(items)
                })
                DeviceEventEmitter.emit('showToast', '显示缓存数据')
                // 判断是否数据过期
                if (result && result.update_date && this.dataRepository.checkedData(result.update_date)) {
                    DeviceEventEmitter.emit('showToast', '数据过时')
                    {
                        return this.dataRepository.fetchNetRespotory(url);
                    }
                }
            }).then(items => {
                if (!items || items.length === 0) return;
                this.setState({
                    isLoading: false,
                    dataSource: this.state.dataSource.cloneWithRows(items)
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
