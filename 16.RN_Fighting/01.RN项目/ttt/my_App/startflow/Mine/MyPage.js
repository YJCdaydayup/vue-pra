/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    AsyncStorage,
    ListView,
    RefreshControl
} from 'react-native';

import {FLAG_STORAGE} from './../../expand/DataRepository'
import FavorateDao from './../../expand/FavorateDao'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import ProjectModel from './../../model/ProjectModal'
import RespositoryCell from './../RepositoryCell'
import TrendingCell from './../../pages/TrendingCell'

export default class MyPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                    <FavorateTab
                        tabLabel="最热"
                        flag={FLAG_STORAGE.flag_popular}
                    />
                    <FavorateTab
                        tabLabel="趋势"
                        flag={FLAG_STORAGE.flag_trending}
                    />
                </ScrollableTabView>
            </View>
        );
    }
}

class FavorateTab extends Component {
    constructor(props) {
        super(props);
        this.favorateDao = new FavorateDao(this.props.flag)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2)=>r1 !== r2
            }),
            isLoading: false,
        }
        this._renderRow = this._renderRow.bind(this)
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        }, ()=> {
            this.favorateDao.getAllItem().then(items => {
                let models = [];
                for (let i = 0; len = items.length, i < len; i++) {
                    models.push(new ProjectModel(JSON.parse(items[i])), true);
                }
                this.setState({
                    isLoading: false,
                    dataSource: this.state.dataSource.cloneWithRows(models)
                })
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
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

    _renderRow(projectModel) {
        return (
            this.props.flag === FLAG_STORAGE.flag_popular ? <RespositoryCell
                projectModel={projectModel}
                clickEvent={this._clickEvent.bind(this)}
                onFavorate={this._onFavorate.bind(this)}
                navigation={this.props.nav}
            /> : <TrendingCell
                model={projectModal}
                clickEvent={this._clickEvent.bind(this)}
                navigation={this.props.nav}
                onFavorate={this._onFavorate.bind(this)}
            />
        )
    }

    _clickEvent() {

    }

    _onFavorate() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
