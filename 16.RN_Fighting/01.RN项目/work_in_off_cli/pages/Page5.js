import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    Button
} from 'react-native'

import FetchRespository from './../expand/DataRespository'
// import Toast from 'react-native-toast'
// import  Toast from '@remobile/react-native-toast'
import Toast from 'react-native-root-toast';

const Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

import ViewUtils from './../common/ViewUtils'

import Loading from './../component/Loading'

export default class Page5 extends Component {

    static navigationOptions = ({navigation}) => {
        let {state} = navigation;
        let {params} = state;
        return {
            headerLeft: ViewUtils.getLeftButton(() => {
                typeof params.backEvent === 'function' ? params.backEvent() : null
            })
        }
    }

    constructor(props) {
        super(props);
        this.fetchRespository = new FetchRespository();
        this.state = {
            dataArray: [],
            showLoading: false,
        }
        this._renderItem = this._renderItem.bind(this);
        this._showLoading = this._showLoading.bind(this);
    }

    _goBack() {
        this.props.navigation.goBack();
    }

    componentDidMount() {
        let {setParams} = this.props.navigation;
        setParams({
            backEvent: this._goBack.bind(this)
        })
        this.loadData();
    }

    loadData() {
        const URL = 'https://api.github.com/search/repositories?q='
        const QUERY_STR = '&sort=stars'
        this.fetchRespository.fetchRespositoryData(URL + 'javascript' + QUERY_STR).then(res => {
            // let items = res && res.items ? res.items : res ? res : []
            let {items} = res.items || res || []
            this.setState({
                dataArray: items
            })
            if (res && res.update_time && this.fetchRespository.checkedData(1000)) {
                this.toast.showLongTop('数据过期，获取新的数据...');
                this.fetchRespository.fetchNetRespository(URL + 'ios' + QUERY_STR).then(res => {
                    let items = res.items || res || []
                    this.setState({
                        dataArray: items
                    })
                })
            }
        }).catch((err) => {

        })
    }

    render() {

        // let toast = Toast.show('This is a message', {
        //     duration: Toast.durations.LONG, // toast显示时长
        //     position: Toast.positions.BOTTOM, // toast位置
        //     shadow: true, // toast是否出现阴影
        //     animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
        //     hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
        //     delay: 0, // toast显示的延时
        //     onShow: () => {
        //         // toast出现回调（动画开始时）
        //     },
        //     onShown: () => {
        //         // toast出现回调（动画结束时）
        //         setTimeout(()=>{
        //             Toast.hide(toast)
        //         }, 2000)
        //     },
        //     onHide: () => {
        //         // toast隐藏回调（动画开始时）
        //     },
        //     onHidden: () => {
        //         // toast隐藏回调（动画结束时）
        //     }
        // });

        return <View style={styles.container}>
            <FlatList
                style={{
                    flex: 1
                }}
                data={this.state.dataArray}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <Loading
                style={styles.loadingStyles}
                isAnimating={this.state.showLoading}
                title="加载中..."
            />
        </View>
    }

    componentWillUpdate() {

    }

    _renderItem({item}) {
        return <View
            style={{
                padding: 12,
                borderColor: 'rgba(29,29,29,0.1)',
                borderWidth: 0.5
            }}
        >
            <Text onPress={() => {
                this._showLoading();
            }}>{item.name}</Text>
        </View>
    }

    _showLoading() {
        this._updateState({
            showLoading: !this.state.showLoading
        })
    }

    _updateState(state) {
        if (!this) return;
        this.setState(state)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    loadingStyles: {
        position: 'absolute',
        width: width,
        height: height
    }


})
