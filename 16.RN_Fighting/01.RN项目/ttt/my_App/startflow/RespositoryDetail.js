/**
 * Created by yangli on 2019/3/31.
 */
/**
 * Created by yangli on 2019/3/31.
 */
/**
 * Created by yangli on 2019/3/31.
 */
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
    WebView,
    DeviceEventEmitter,
    TouchableOpacity,
    Image
} from 'react-native';

const TRENDING_URL = 'https://github.com/trending/';

import ViewUtils from './../common/ViewUtil'
import FavorateDao from './../expand/FavorateDao'

const notice = 'notice'

export default class RespositoryDetail extends Component {
    static navigationOptions = ({navigation}) => {
        let {state} = navigation;
        let {params} = state;
        let data = params.params;
        let {isFavorate, changeFavorate} = params;
        let {setParams} = navigation;
        return {
            headerTitle: data.full_name ? data.full_name : data.fullName,
            headerTitleStyle: {
                color: "#fff"
            },
            headerLeft: (
                ViewUtils.getLeftButton(()=> {
                    DeviceEventEmitter.emit(notice)
                })
            ),
            headerRight: (
                <TouchableOpacity
                    onPress={()=> {
                        setParams({
                            isFavorate: !isFavorate
                        })
                        changeFavorate(isFavorate);
                    }}
                >
                    <Image
                        source={isFavorate ? require('./../res/images/ic_star.png') : require('./../res/images/ic_unstar_transparent.png')}
                        style={{width: 22, height: 22, marginRight: 10}}
                    />
                </TouchableOpacity>
            )
        }
    }

    constructor(props) {
        super(props);
        let {params} = this.props.navigation.state;
        this.canGoBack = false;
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this)
        this.favorateDao = new FavorateDao(params.flag)
    }

    componentWillMount() {
        DeviceEventEmitter.addListener(notice, ()=> {
            if (this.canGoBack) {
                this.webView.goBack();
            } else {
                this.props.navigation.goBack();
                let {updatePage} = this.props.navigation.state.params;
                updatePage();
            }
        })
    }

    componentDidMount() {
        let {setParams} = this.props.navigation;
        setParams({
            changeFavorate: this._changeFavorate.bind(this)
        })
    }

    _changeFavorate(isFavorate) {
        let {state} = this.props.navigation;
        let {params} = state;
        let model = params.params;

        let temp;
        try {
            temp = model.item.fullName;
        } catch (err) {
            temp = model.id.toString();
        }

        if (!isFavorate) {
            this.favorateDao.saveFavorateItem(temp, JSON.stringify(model))
        } else {
            this.favorateDao.removeFavorateItem(temp)
        }
    }

    render() {
        let {state} = this.props.navigation;
        let {params} = state;
        let data = params.params;
        this.url = data.html_url ? data.html_url : TRENDING_URL + data.fullName
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: this.url}}
                    onNavigationStateChange={this.onNavigationStateChange}
                    ref={(webView)=>this.webView = webView}
                    startInLoadingState={true}
                />
            </View>
        )
    }

    onNavigationStateChange(e) {
        this.canGoBack = e.canGoBack;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
