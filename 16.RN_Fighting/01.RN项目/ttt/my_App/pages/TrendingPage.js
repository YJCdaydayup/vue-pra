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
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';

import Toast, {DURATION} from 'react-native-easy-toast'

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'

import NavgationBar from './../NavgationBar'

import HttpUtil from './../common/HttpUtil'

import ViewUtils from './../common/ViewUtil'

import LanguageDao, {FLAG_LANGUAGE} from './../common/LanguageDao'
import ProjectModal from './../model/ProjectModal'
import FavorateDao from './../expand/FavorateDao'
import Utils from './../utils/Utils'

import TimeSpan from './../model/TimeSpan'

const timeSpanTextArray = [
    new TimeSpan('今天', 'since=daily'),
    new TimeSpan('本周', 'since=weekly'),
    new TimeSpan('本月', 'since=monthly')
];

const API_URL = 'https://github.com/trending/';

import TrendingCell from './TrendingCell'

import DataRepository, {FLAG_STORAGE} from './../expand/DataRepository'

import Popver from './../parties/Popoview'

dataRepository = new DataRepository(FLAG_STORAGE.flag_trending);
favorateDao = new FavorateDao(FLAG_STORAGE.flag_trending)

export default class TrendingPage extends Component {

    static navigationOptions = ({navigation}) => {
        let viewUtils = new ViewUtils();
        let {state} = navigation;
        let {params} = state;
        let title = '今天';
        try {
            title = params.title;
        } catch (err) {
            title = '今天'
        }
        return {
            headerTitle: viewUtils.getPopview((ref)=> {
                params.showPopver(ref);
            }, title)
        }
    }

    constructor(props) {
        super(props)
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_language);
        this.state = {
            dataArray: [],
            isVisible: false,
            buttonRect: {},
            timeSpan: timeSpanTextArray[0]
        }
        this._closePopver = this._closePopver.bind(this);
        this._showPopver = this._showPopver.bind(this);
    }

    componentDidMount() {
        let {navigation} = this.props;
        let {setParams} = navigation;
        setParams({
            showPopver: this._showPopver.bind(this),
            title: this.state.timeSpan.showText
        })

        this.loadData()
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
                                item.checked ? <TrendingTab key={index} tabLabel={item.name}
                                                            timeSpan={this.state.timeSpan}
                                                            nav={navigation}/> : null
                            )
                        })}
                    </ScrollableTabView>
                    <Popver
                        isVisible={this.state.isVisible}
                        onClose={this._closePopver}
                        fromRect={this.state.buttonRect}
                        placement="bottom"
                        contentStyle={{
                            backgroundColor: '#343434',
                            opacity: 0.82
                        }}
                    >
                        {timeSpanTextArray.map((item, index)=> {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={()=> {
                                        this.onSelectTimeSpan(item)
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: '400',
                                            color: "#fff",
                                            padding: 8
                                        }}
                                    >{item.showText}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </Popver>
                </View> : null
        )
    }

    onSelectTimeSpan(item) {
        let {setParams} = this.props.navigation;
        this.setState({
            timeSpan: item,
            isVisible: false,
        }, ()=> {
            setParams({
                title: this.state.timeSpan.showText
            })
        })
    }

    _showPopver(ref) {
        ref.measure((ox, oy, width, height, px, py) => {
            this.setState({
                isVisible: true,
                buttonRect: {x: px, y: py - 44, width: width, height: height}
            });
        });
    }

    _closePopver() {
        this.setState({
            isVisible: false
        });
    }
}

class TrendingTab extends Component {

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
            isLoading: false,
            favorateKeys: []
        }
        this._onLoad = this._onLoad.bind(this)
        this._clickEvent = this._clickEvent.bind(this)
        this._renderRow = this._renderRow.bind(this)
    }

    //  收到新的属性回调
    componentWillReceiveProps(nextProps) {
        if (nextProps.timeSpan !== this.props.timeSpan) {
            this._onLoad(nextProps.timeSpan)
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    refreshControl={<RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={()=> {
                            this.onRefresh();
                        }}
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

    onRefresh() {
        this._onLoad(this.props.timeSpan)
    }

    _renderRow(projectModal) {
        return (
            <TrendingCell
                model={projectModal}
                clickEvent={this._clickEvent}
                navigation={this.props.nav}
                onFavorate={this._onFavorate.bind(this)}
            />
        )
    }

    _onFavorate(model, isFavorate) {
        if (isFavorate) {
            favorateDao.saveFavorateItem(model.item.fullName, JSON.stringify(model))
        } else {
            favorateDao.removeFavorateItem(model.item.fullName)
        }
    }

    _clickEvent(rowData, isFavorate) {
        this.props.nav.navigate('Detail', {
            params: rowData,
            isFavorate: isFavorate,
            flag: FLAG_STORAGE.flag_trending,
            updatePage: this._updatePage.bind(this)
        });
    }

    _updatePage() {
        this._onLoad(this.props.timeSpan,);
    }

    componentDidMount() {
        this._onLoad(this.props.timeSpan,);
    }

    genUrl(timeSpan, catagory) {
        return API_URL + catagory + '?' + timeSpan.searchText;
    }

    _onLoad(timeSpan, isRefresh) {
        this.setState({
            isLoading: true
        }, ()=> {
            let url = this.genUrl(timeSpan, this.props.tabLabel);
            dataRepository.fetchRepository(url).then(result => {
                let items = result && result.items ? result.items : result ? result : []
                this.getFavorateKeys(items);
                if (result && result.update_date && dataRepository.checkedData(result.update_date)) {
                    {
                        return dataRepository.fetchNetRespotory(url);
                    }
                }
            }).then(items => {
                if (!items || items.length === 0) return;
                this.getFavorateKeys(items);
            }).catch(err=> {

            })
        })
    }

    /**
     * 更新modal每一项的收藏状态
     **/
    flushFavorateState(items) {
        let projectModals = [];
        for (let i = 0; len = items.length, i < len; i++) {
            projectModals.push(new ProjectModal(items[i], Utils.checkFavorate(items[i], this.state.favorateKeys)));
        }
        this.updateState({
            isLoading: false,
            dataSource: this.state.dataSource.cloneWithRows(projectModals)
        })
    }

    getFavorateKeys(items) {
        favorateDao.getFavorateKs().then(keys => {
            if (keys) {
                this.updateState({
                    favorateKeys: keys
                })
            }
            this.flushFavorateState(items)
        }).catch(err=> {
            this.flushFavorateState(items)
        })
    }

    /**
     * 对setState进行封装
     **/
    updateState(dic) {
        if (!this) return;
        this.setState(dic);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
