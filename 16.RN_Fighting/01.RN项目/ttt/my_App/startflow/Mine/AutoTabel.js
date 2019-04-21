/**
 * Created by yangli on 2019/4/14.
 */
/**
 * 添加Trending语言,Popular 关键字
 * @flow
 * **/

import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Image,
    Alert,
    Text,
    DeviceEventEmitter,
    AlertIOS
} from 'react-native'
import CheckBox from 'react-native-check-box'
import LanguageDao, {FLAG_LANGUAGE} from '../../common/LanguageDao'
import ArrayUtils from '../../common/ArrayUtils'
import ViewUtils from '../../common/ViewUtil'

const nav_back_notice = 'nav_back_notice';
const nav_save_notice = 'nav_save_notice';

export default class AutoTabel extends Component {
    static navigationOptions = ({navigation})=> {
        let {state, setParams} = navigation;
        let {params} = state.params;
        let title = params.isRemoveKey ? '标签移除' : "自定义标签";
        if (!params.isRemoveKey) {
            title = params.flag === FLAG_LANGUAGE.flag_key ? title: '自定义语言';
        }
        return {
            headerTitle: title,
            headerTitleStyle: {
                color: "#fff"
            },
            headerLeft: ViewUtils.getLeftButton(()=> {
                DeviceEventEmitter.emit(nav_back_notice)
            }),
            headerRight: <Text
                onPress={()=> {
                    DeviceEventEmitter.emit(nav_save_notice)
                }}
                style={{
                    color: "#fff",
                    fontSize: 18,
                    marginRight: 10
                }}
            >{params.isRemoveKey ? '移除' : "保存"}</Text>
        }
    }

    constructor(props) {
        super(props);
        this.changeValues = [];
        this.isRemoveKey = this.props.isRemoveKey ? true : false;
        this.state = {
            dataArray: []
        }
    }

    componentDidMount() {

        DeviceEventEmitter.addListener(nav_back_notice, ()=> {
            this._onBack();
        })

        DeviceEventEmitter.addListener(nav_save_notice, ()=> {
            this._onSave();
        })
        this.languageDao = new LanguageDao(this.props.navigation.state.params.params.flag);
        this.loadData();
    }

    _onBack() {
        let {navigation} = this.props;
        if (this.changeValues.length === 0) {

        } else {
            AlertIOS.alert(
                "Update available",
                "Keep your app up to date to enjoy the latest features",
                [
                    {
                        text: "不保存",
                        onPress: () => {
                        },
                        style: "cancel"
                    },
                    {
                        text: "保存",
                        onPress: () => this.languageDao.save(this.state.dataArray)
                    }
                ]
            );
        }
        navigation.goBack();
    }

    _onSave() {
        let {navigation} = this.props;
        if (this.changeValues.length === 0) {
            navigation.goBack();
            return;
        }
        for (let i = 0; len = this.changeValues.length, i < len; i++) {
            ArrayUtils.remove(this.state.dataArray, this.changeValues[i])
        }
        this.languageDao.save(this.state.dataArray)
        navigation.goBack();
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

    onClick(data) {
        if (!this.isRemoveKey) {
            data.checked = !data.checked;
        }
        ArrayUtils.updataArray(this.changeValues, data)
    }

    renderView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0)return;
        var len = this.state.dataArray.length;
        var views = [];
        for (var i = 0, l = len - 2; i < l; i += 2) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.state.dataArray[i])}
                        {this.renderCheckBox(this.state.dataArray[i + 1])}
                    </View>
                    <View style={styles.line}/>
                </View>
            )
        }
        views.push(
            <View key={len - 1}>
                <View style={styles.item}>
                    {len % 2 === 0 ? this.renderCheckBox(this.state.dataArray[len - 2]) : null}
                    {this.renderCheckBox(this.state.dataArray[len - 1])}
                </View>
            </View>
        )
        return views;

    }

    renderCheckBox(data) {
        let leftText = data.name;
        let {state} = this.props.navigation;
        let {params} = state.params;
        let isChecked = params.isRemoveKey?false: data.checked;
        return (
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={()=>this.onClick(data)}
                isChecked={isChecked}
                leftText={leftText}
                checkedImage={<Image source={require('../../res/img/ic_check_box.png')}/>}
                unCheckedImage={<Image source={require('../../res/img/ic_check_box_outline_blank.png')}/>}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderView()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2'
    },
    item: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
})