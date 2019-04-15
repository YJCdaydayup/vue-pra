import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    NativeAppEventEmitter,
    DeviceEventEmitter,
    Platform,
    AlertIOS
} from 'react-native'

import Language, {Lanuage_Flag} from './../common/AgainLanuageDao'
import ViewUtils from './../common/ViewUtils'

import CheckBox from "../component/CheckBox";

export default class Page1 extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: ViewUtils.getLeftButton(() => {
                DeviceEventEmitter.emit('userNameDidChange', '来了')
            })
        }
    }

    constructor(props) {
        super(props);
        this.language = new Language(Lanuage_Flag.flag_key);
        this.changedArr = [];
        this.state = {
            dataArray: [],
            test: 'cascascac'
        }

        this._click = this._click.bind(this);
        this._onSave = this._onSave.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderView()}
                <Text>{this.state.test}</Text>
            </View>
        )
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            this.subscription = DeviceEventEmitter.addListener('userNameDidChange', (userName) => {

            })
        } else {
            this.subscription = NativeAppEventEmitter.addListener('userNameDidChange', (userName) => {
                if (this.changedArr.length > 0) {
                    this._onSave();
                }
                this.props.navigation.goBack();
            })
        }
    }

    // 移除通知
    componentWillUnmount() {
        this.subscription.remove();
    }

    _onSave() {
        this.language.save(this.state.dataArray).then(() => {
            // alert('保存成功');
        }).catch((err) => {
            // alert('保存失败');
        })
    }

    _renderView() {
        let arr = [];
        let dataArr = this.state.dataArray;
        let len = dataArr.length;
        if (len % 2 === 0) {
            // 偶数
            arr = this.handlerDataArray(len);
        } else {
            // 奇数
            arr = this.handlerDataArray(len - 1);
            let item = this.state.dataArray[len - 1];
            arr.push(
                <View style={styles.box} key={item.name}>
                    <CheckBox clickEvent={this._click} item={item}/>
                </View>
            )
        }
        return arr;
    }

    handlerDataArray(len) {
        let views = [];
        for (let i = 0; i <= len - 2; i += 2) {
            let item1 = this.state.dataArray[i];
            let item2 = this.state.dataArray[i + 1];
            views.push(
                <View style={styles.rowStyle} key={i}>
                    <View style={styles.box} key={item1.name}>
                        <CheckBox clickEvent={this._click} item={item1}/>
                    </View>
                    <View style={styles.box} key={item2.name}>
                        <CheckBox clickEvent={this._click} item={item2}/>
                    </View>
                </View>
            )
        }
        return views;
    }


    _click(item) {
        ViewUtils.updateLocalArray(this.changedArr, item);
    }

    componentDidMount() {
        this._loadData();
    }

    _loadData() {
        this.language.fetch().then((data) => {
            this.setState({
                dataArray: data
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f4f1'
    },
    rowStyle: {
        flexDirection: 'row',

    },
    box: {
        flex: 1,
        paddingLeft: 20,
        marginVertical: 10
    }
})
