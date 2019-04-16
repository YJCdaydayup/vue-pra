import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    DeviceEventEmitter
} from 'react-native'

const back_notice = 'back_notice'
const save_notice = 'save_notice'

import LaunageDao, {Lanuage_Flag} from './../common/AgainLanuageDao'
import SortableListView from 'react-native-sortable-listview'
import ViewUtils from './../common/ViewUtils'
import ArrayUtils from './../common/ArrayUtils'

export default class Page4 extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (
                ViewUtils.getLeftButton(() => {
                    DeviceEventEmitter.emit(back_notice)
                })
            ),
            headerRight: <Text
                style={{
                    marginRight: 10,
                    fontSize: 16,
                    color: '#fff'
                }}
                onPress={() => {
                    DeviceEventEmitter.emit(save_notice)
                }}
            >保存</Text>
        }
    }

    constructor(props) {
        super(props);
        this.language = new LaunageDao(Lanuage_Flag.flag_key);
        this.originalCheckedArray = [];
        this.dataArray = [];
        this.state = {
            checkedArray: []
        }
    }

    componentDidMount() {
        DeviceEventEmitter.addListener(back_notice, () => {
            this._backAction();
        });

        DeviceEventEmitter.addListener(save_notice, () => {
            this._saveAction()
        });
        this._loadData();
    }

    _backAction() {
        let {navigation} = this.props;
        let sortArray = ArrayUtils.clone(this.dataArray)
        if (ArrayUtils.isEqual(this.state.checkedArray, this.originalCheckedArray)) {
            navigation.goBack();
            return false;
        }

        alert('是否先去保存一下?')
    }

    _saveAction() {
        let {navigation} = this.props;
        let sortArray = ArrayUtils.clone(this.dataArray)
        if (ArrayUtils.isEqual(this.state.checkedArray, this.originalCheckedArray)) {
            return false;
        }

        this.originalCheckedArray.forEach((item, index) => {
            let i = this.dataArray.indexOf(item);
            sortArray.splice(i, 1, this.state.checkedArray[index]);
        })

        this.language.save(sortArray).then(() => {
            alert('保存成功');
        });
    }

    _loadData() {
        let checkedArray = [];
        this.language.fetch().then((data) => {
            this.dataArray = data;
            data.forEach((item, index) => {
                if (item.checked) {
                    checkedArray.push(item);
                }
            })
            this.setState({
                checkedArray: checkedArray
            })
            this.originalCheckedArray = ArrayUtils.clone(checkedArray);
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <SortableListView
                    style={{flex: 1}}
                    data={this.state.checkedArray}
                    order={Object.keys(this.state.checkedArray)}
                    onRowMoved={e => {
                        this.state.checkedArray.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0])
                        this.forceUpdate()
                    }}
                    renderRow={row => <RowComponent data={row}/>}
                />
            </View>
        )
    }
}

class RowComponent extends Component {
    render() {
        return (
            <TouchableHighlight
                underlayColor={'#eee'}
                style={{
                    padding: 25,
                    backgroundColor: '#F8F8F8',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                }}
                {...this.props.sortHandlers}
            >
                <Text>{this.props.data.name}</Text>
            </TouchableHighlight>
        )
    }
}