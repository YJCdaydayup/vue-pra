/**
 * Created by yangli on 2019/4/14.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    DeviceEventEmitter,
    AlertIOS
} from 'react-native'

import LanguageDao, {FLAG_LANGUAGE} from './../../common/LanguageDao'
import ArrayUtils from './../../common/ArrayUtils'
import ViewUtils from './../../common/ViewUtil'

const back_notice = 'back_notice'
const save_notice = 'save_notice'

import SortableListview from 'react-native-sortable-listview'

export default class SortKeyPage extends Component {
    static navigationOptions = ({navigation}) => {
        let {flag} = navigation.state.params;
        return {
            title: flag === FLAG_LANGUAGE.flag_key ? "标签排序" : "语言排序",
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: ViewUtils.getLeftButton(()=> {
                DeviceEventEmitter.emit(back_notice)
            }),
            headerRight: <Text
                style={{
                    marginRight: 10,
                    fontSize: 16
                }}
                onPress={()=> {
                    DeviceEventEmitter.emit(save_notice)
                }}
            >保存</Text>
        }
    }

    constructor(props) {
        super(props)
        this.dataArray = [];
        this.sortResultArray = [];
        this.originalCheckedArray = [];
        this.languageDao = new LanguageDao(this.props.navigation.state.params.flag);
        this.state = {
            checkedArray: []
        }
    }

    componentDidMount() {
        DeviceEventEmitter.addListener(back_notice, ()=> {
            this._onBack();
        })

        DeviceEventEmitter.addListener(save_notice, ()=> {
            this._onSave();
        })

        this.loadData();
    }

    loadData() {
        this.languageDao.fetch().then((data) => {
            this.getCheckedItems(data);
        }).catch(err=> {

        })
    }

    getCheckedItems(result) {
        this.dataArray = result;
        let checkedArray = [];
        for (let i = 0; len = result.length, i < len; i++) {
            let data = result[i];
            if (data.checked) {
                checkedArray.push(data);
            }
        }
        this.setState({
            checkedArray: checkedArray
        })
        this.originalCheckedArray = ArrayUtils.clone(checkedArray);
    }

    _onBack() {
        let {navigation} = this.props;
        console.log(ArrayUtils.isEqual(this.originalCheckedArray, this.state.checkedArray))
        console.log(this.originalCheckedArray)
        console.log(this.state.checkedArray)
        if (ArrayUtils.isEqual(this.originalCheckedArray, this.state.checkedArray)) {
            navigation.goBack();
        } else {
            AlertIOS.alert(
                "Update available",
                "Keep your app up to date to enjoy the latest features",
                [
                    {
                        text: "不保存",
                        onPress: () => {
                            navigation.goBack();
                        },
                        style: "cancel"
                    },
                    {
                        text: "保存",
                        onPress: () => {
                            this.getSortResult()
                            this.languageDao.save(this.sortResultArray)
                            navigation.goBack();
                        }
                    }
                ]
            );
        }
    }

    _onSave() {
        if (ArrayUtils.isEqual(this.originalCheckedArray, this.state.checkedArray)) {
            this.props.navigation.goBack();
            return false;
        }
        this.getSortResult()
        this.languageDao.save(this.sortResultArray)
        this.props.navigation.goBack();
    }

    getSortResult() {
        this.sortResultArray = ArrayUtils.clone(this.dataArray);
        // 获取重新排序后的整体的标签
        for (let i = 0; i < this.originalCheckedArray.length; i++) {
            let item = this.originalCheckedArray[i];
            let index = this.dataArray.indexOf(item);
            // splice不仅可以删除数组中的元素，还可以添加元素，在后面splice参数中加一个元素，就意味着在这个地方删除了元素后再加一个元素在这里了
            this.sortResultArray.splice(index, 1, this.state.checkedArray[i])
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SortableListview
                    style={{flex: 1}}
                    data={this.state.checkedArray}
                    order={Object.keys(this.state.checkedArray)}
                    onRowMoved={e => {
                        this.state.checkedArray.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0])
                        this.forceUpdate()
                    }}
                    renderRow={row => <SortCell data={row}/>}
                />
            </View>
        )
    }
}

class SortCell extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableHighlight
                underlayColor="#eee"
                delayLongPress={500}
                style={styles.item}
                {...this.props.sortHandlers}
            >
                <View style={styles.row}>
                    <Image
                        style={styles.image}
                        source={require('./../../res/img/ic_sort.png')}
                    />
                    <Text style={{fontSize: 18}}>{this.props.data.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        borderBottomColor: 'rgba(29,29,29,0.2)',
        borderBottomWidth: 1,
        marginLeft: 16,
        paddingVertical: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 10
    }
})