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
    StyleSheet,
    Text,
    View,
    Platfrom,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    ListView,
    Modal,
} from 'react-native';

import Video from 'react-native-video'

let {width, height} = require('Dimesions').get('window');

import config from './../common/config'
import request from './../common/request'
import Button from 'react-native-button'

export default class react_sys_constructor extends Component {


    constructor(props) {
        super(props);
        this.state = {
            rowData: this.props.rowData,
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            paused: false,

            duration: 0.0,
            currentTime: 0.0,
            videoLoaded: false,
            playing: false,
            playEnd: false,
            videoError: false

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => {
                    r1 !== R2
                }
            }),

            isLoadingTail: false,


            // 关于模态视图 fade slide none 动画效果
            animationType: 'fade',
            modalVisible: false, // 是否显示
            transparent: false, // 是否半透明

            btnDisable: true,
            content: ''
        }

        // 所有的bind可以提前在构造方法里面绑定好
        this._onLoadStart = this._onLoadStart.bind(this);
        this._onLoad = this._onLoad.bind(this);
        this._onProgress = this._onProgress.bind(this)
        this._onEnd = this._onEnd.bind(this)
        this._onError = this._onError.bind(this);
        this._resume = this._resume.bind(this);
        this.pause = this.pause.bind(this);
        this._pop = this._pop.bind(this);
        this._renderRow = this._renderRow.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._setModalVisible = this.__setModalVisible.bind(this);
        this._stateShow = this._startShow.bind(this);
        this._closeModal = this._closeModal.bind(this);
    }

    render() {

        let rowData = this.state.rowData;

        // 通过flex展示进度
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

        return (
            <View style={styles.videoBox}>

                <View style={styles.navStyle}>
                    <TouchableOpacity
                        style={styles.backBox}
                        onPress={this._pop}
                    >
                        <Icon
                            name="ios-arrow-back"
                            style={styles.backIcon}
                        />
                        <Text style={styles.backText}>返回</Text>
                    </TouchableOpacity>
                    <Text style={styles.navText} numberOfLines={1}>视频详情页面</Text>
                </View>

                <Video
                    ref="videoPlayer"

                    source={rowData.video}
                    style={styles.videoStyle}
                    rate={this.state.rate}
                    paused={this.state.paused}
                    volumn={this.state.volume}
                    muted={this.state.muted} // 静音
                    resizeMode={this.state.resizeMode}
                    repeat={false}

                    onLoadStart={this._onLoadStart}
                    onLoad={this._onLoad}
                    onProgress={this._onProgress}
                    onEnd={this._onEnd}
                    onError={this._onError}
                />

                {this,state.videoError?<Text>
                    您访问的样式飞走了
                    </Text>:null}

                {/* 控制小菊花的显示和隐藏 */}
                {!this.state.videoLoaded ? <ActivityIndicatot
                    color: 'red'
                    size="large"
                    style={styles.loading}
                /> : null}

                {
                    !this.state.playing && this.video.videoLoaded ? <TouchableOpacity
                        style={styles.pauseStyle}
                        onPress={this._pause}
                    >
                        {this.state.paused ? <Icon
                            size={45}
                            style={styles.play}
                            onPress={this._resume}
                        /> : null}
                    </TouchableOpacity> : null
                }

                {/* 播放按钮 */}
                {
                    !this.state.playing && this.video.videoLoaded ? <Icon
                        name='ios-play'
                        size={45}
                        style={styles.play}
                        onPress={this._replay}
                    /> : null
                }

                {/* 进度条 */}
                <View style={styles.progress}>
                    <View
                        style={[styles.innerProgressCompleted, {flex: flexCompleted}]}
                    />
                    <View
                        style={[styles.innerProgressRemaining, {flex: flexRemaining}]}
                    />
                </View>

                {/* 底部信息 */}
                {/*<ScrollView*/}
                {/*enableEmptySections={true}*/}
                {/*automaticallyAdjustContentInsets={false}*/}
                {/*showsVerticalScrollIndicator={false}*/}
                {/*style={styles.scrollView}*/}

                {/*>*/}
                {/* 视频详情 */}


                {/* 列表 */}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    enableEmptySections={true}
                    automaticallyAdjustContentInsets={false}
                    showsVerticalScrollIndicator={false}
                    onEndReached={this._fetchMoreData}
                    onEndReachedThrehold={20}
                    renderFooter={this._renderFooter}
                    renderHeader={this._renderHeader}
                />

                {/*</ScrollView>*/}

                {/* 模态视图 */}
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    // 回调方法
                    onRequestClose={() => {
                        this._setModalVisible(false);
                    }}
                    onShow={this._startShow}
                >
                    <Text>我是模态视图</Text>
                    <Icon name='ios-close'
                          size={45}
                          onPress={this._closeModal}
                          style={styles.closeIcon}
                    />

                    {/* 评论的盒子 */}
                    <View style={styles.commentBox}>
                        <TextInput
                            placeholder='来一下'
                            style={styles.inputStyle}
                            multiline={true}
                            underlineColorAndroid='transparent'
                            defaultValue={this.state.content}
                            onChangeText={(text)=> {
                                this.setState({
                                    content: text,
                                    btnDisable: text === '' ? true : false
                                })
                            }}
                        />
                        <Button
                            style={styles.submitBtn}
                            onPress={this._submitClick}
                            title='评论一下'
                            disabled={this.state.btnDisable}
                        />
                    </View>

                </Modal>

            </View>
        );
    }

    _submitClick() {
        if (this.state.isSendingComment) {
            alert('急啥，正在发送...');
            return ;
        }
        this.setState({
            isSendingComment: true,
            btnDisable: true
        }, ()=> {
            let body = {
                accessToken: '1234',
                id_video: '2345',
                content: this.state.content
            }
            let url = config.api.base + config.api.comment;
            request.post(url, body).then((reponse) => {
                if (response && reponse.succuss) {
                    // 更新列表
                    let  items = cacheResult.items.slice();
                    items = [{
                        content: this.state.content,
                        replyBy: {
                            avatar:: '',
                            nickName: 'Hank'
                        }
                    }].concat(items);
                    cacheResult.item = items;
                    cacheResult.total += 1;
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(items)
                        isSendingComment: false,
                        content: '',
                        btnDisable: this
                    })

                    this._setModalVisible(false)
                }
            }).catch((err)=> {
                this.setState({
                    isSendingComment: false
                })
                this._setModalVisible(false)
            })
        })
    }

    _closeModal() {
        this._setModalVisible(false);
    }

    _setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        })
    }

    _startShow() {
        alert('来了!!!');
    }

    _renderHeader() {
        let {rowData} = this.state;
        return (
            <View style={styles.infoBox}>
                <Image
                    style={styles.avatar}
                    source={{uri: rowData.author.avatar}}
                />
                <View style={styles.infoBox}>
                    <Text style={styles.nickName}>作者{rowData.nickName}</Text>
                    <Text style={styles.title}>标题: {rowData.title}</Text>
                </View>
            </View>
        )
    }

    _fetchMoreData() {
        if (!_hasMore() || this.state.isLoadingTail) {
            return;
        }
        this.setState({
            isLoadingTail: true
        })

    }

    _renderFooter = ()=> {
        return (
            !this.state.isLoadingTail ? <View>

            </View> : <Text></Text>
        )
    }

    _hasMore() {

    }

    componentDidMount() {
        this._fetchData();
    }

    _renderRow(rowData_replay) {
        return (
            <View
                style={styles.replayBox}
                key={rowData_replay._id}
            >
                <Image
                    style={styles.replayAvatar}
                    source={{uri: rowData_replay.icon}}
                />
                <View style={styles.infoBox}>
                    <Text style={styles.nickName}>{rowData_replay.nickName}</Text>
                </View>
            </View>
        )
    }

    _fetchData = () => {
        let url = config.api.base + config.api.comments;
        request.get(url, {
            id: this.state.rowData._id,
            accessToken: 'aaaaaa',
        }).then((res) => {
            if (res && res.succuss) {
                let comments = res.data;
                if (comments && comments.length > 0) {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(comments)
                    })
                }
            }
        }).catch((err)=> {
            console.log(err);
        })
    }

    _pop() {
        let {navigation} = this.props;
        if (navigation) {
            navigation.goBack();
        }
    }

    _resume() {
        if (this.state.paused) {
            this.setState({
                paused: false
            })
        }
    }

    _pause() {
        if (!this.state.paused) {
            this.setState({
                paused: true
            })
        }
    }

    _backTolist = () => {
        let {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

//
_replay = ()=> {
    // 重头开始播放
    this.setState({,
        playEnd
    :
    false,
        paused
    :
    false
})
    this.refs.videoPlayer.seek(0);
}

_onLoadStart(data)
{
    // 可以拿到当前总长度
}

_onLoad(data)
{
    this.setState({
        duration: data.duration
    })
}

_onProgress(data)
{

    if (!this.state.videoLoaded) {
        this.setState({
            videoLoaded: true
        })
    }

    if (!this.state.playing && !this.state.playEnd) {
        this.setState({
            playing: true,
            playEnd: true
        })
    }

    // 当progress为1时不来了，到onEnd里面去了
    this.setState({
        currentTime: data.currentTime
    })
}

_onEnd()
{
    console.log('结束了');
    this.setState({
        currentTime: this.state.duration,
        playing: false,
        playEnd: true,
        paused: true // 完成后就暂停会走到onProgress
    })
}

_onError(err)
{
    this.setState({
        videoError: true
    })
}

getCurrentTimePercentage()
{
    if (this.state.currentTime > 0) {
        return parseFloat(this.state.currentTime) / this.state.duration;
    } else {
        return 0;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    videoBox: {
        width: width,
        height: 360,
        backgroundColor: 'black',
        marginTop: Platfrom.OS === 'ios' ? 44 : 20
    },
    videoStyle: {
        width: width,
        height: 360,
        backgroundColor: 'black'
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden'
    },
    play: {
        position: 'absolute',
        width: 60,
        height: 60,
        paddingTop: 10,
        paddingLeft: 22,
        borderRadius: 30,
    },
    pauseStyle: {
        position: 'ansolute',
        top: 0,
        lefft: 0,
        width: width,
        height: 140
    },
    navStyle: {
        flexDirection: 'row',
        justifyContent:: 'center',
        alignItems: 'center',
        width: width,
        height: 64,
        backgroundColor: 'rgba(255,0,0,0.2)'
    },
    backBox: {
        position: 'absolute',
        top: 20,
        width: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    backIcon: {
        fontSize: 22,
        marginRight: 5
    },
    backText: {
        fontSize: 16
    },
    navText: {
        textAlign: 'center',
        lineHeight: 44,
        height: 44,
        marginTop: 20,
    },
    infoBox: {},
    avatar: {},
    infoBox: {},
    nickName: {},
    title: {}
});
