/**
 * Created by yangli on 2019/3/9.
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpactity,
    Image,
} from 'react-native';

let {width, height} = require('Dimensions').get('window');
import Icon from 'react-native-vector-icons/Ionicons'
import request from './../common/request'
import config from './../common/config'

export default class item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rowData: this.props.rowData,
            up: this.props.rowData.voted
        }
    }

    render() {
/
        // 这样就可以改状态机里面的rowData了
        let rowData = this.state.rowData;

        return (
            <TouchableOpacity
                onPress={this.props.onSelect}
            >
                <View style={styles.cellStyle}>
                    <Text style={styles.title}>{rowData.title}</Text>
                    <Image
                        style={styles.thumb}
                        source={{uri: rowData.thumb}}
                    >
                        <Icon name="ios-play"
                              size={30}
                              style={styles.play}
                              onPress={this._up}
                        />
                    </Image>
                    <View style={styles.cellFooter}>

                        <View style={styles.footerBox}>
                            <Icon name={this.state.up?"ios-heart":"ios-heart_down"}
                                  size={30}
                                  style={styles.boxIcon}
                            />
                            <Text style={styles.boxText}>点赞</Text>
                        </View>
                        <View style={styles.footerBox}>
                            <Icon name="ios-chatbubbles-outline"
                                  size={30}
                                  style={styles.boxIcon}
                            />
                            <Text style={styles.boxText}>评论</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    _up = ()=> {
        let up = !this.state.up;
        let url = config.api.base + config.api.up;
        let rowData = this.state.rowData;
        request.post(url, {
            accessToken: 'aaaaaa',
            id: rowData._id,
            up: up? 'yes': 'no'
        }).then((result)=> {
            if (result && data.success) {
                this.setState({
                    up: up
                })
            }else {
                alert('网络错误，请重试！')
            }
        }).catch((err)=>{

        });
    }
}


const styles = StyleSheet.create({
    cellFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ddd',
    },
    footerBox: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginLeft: 1,
    },
    boxIcon: {
        fontSize: 22,
        color: '#333'
    },
    boxText: {
        fontSize: 18,
        color: '#333',
        paddingLeft: 12
    },
    loadingMore: {
        marginVertical: 20
    },
    loadingText: {
        fontSize: 18,
        color: '#777',
        textAlign: 'center'
    }
});
