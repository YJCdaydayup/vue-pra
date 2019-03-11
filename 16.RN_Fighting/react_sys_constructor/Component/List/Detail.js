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
    ActivityIndicator
} from 'react-native';

import Video from 'react-native-video'

let {width, height} = require('Dimesions').get('window');

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
            playEnd: false
        }

        // 所有的bind可以提前在构造方法里面绑定好
        this._onLoadStart = this._onLoadStart.bind(this);
        this._onLoad = this._onLoad.bind(this);
        this._onProgress = this._onProgress.bind(this)
        this._onEnd = this._onEnd.bind(this)
        this._onError = this._onError.bind(this);
    }

    render() {

        let rowData = this.state.rowData;

        // 通过flex展示进度
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

        return (
            <View style={styles.videoBox}>

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
                {/* 控制小菊花的显示和隐藏 */}
                {!this.state.videoLoaded ? <ActivityIndicatot
                    color: 'red'
                    size="large"
                    style={styles.loading}
                />:null}

                {/* 播放按钮 */}
                {
                    !this.state.playing && this.video.videoLoaded?<Icon
                        name='ios-play'
                        size={45}
                        style={styles.play}
                        onPress={this._replay}
                    />:null
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

            </View>
        );
    }

    _backTolist = () => {
        let {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

//
_replay = ()=>{
    // 重头开始播放
    this.setState({,
        playEnd: false,
        paused: false
    })
    this.refs.videoPlayer.seek(0);
}

_onLoadStart(data) {
    // 可以拿到当前总长度
}

_onLoad(data) {
    this.setState({
        duration: data.duration
    })
}

_onProgress(data) {

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

_onEnd() {
    console.log('结束了');
    this.setState({
        currentTime: this.state.duration,
        playing: false,
        playEnd: true,
        paused: true // 完成后就暂停会走到onProgress
    })
}

_onError(err) {
    console.log(err);
}

getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
        return parseFloat(this.state.currentTime) / this.state.duration;
    }else {
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
        marginTop: Platfrom.OS === 'ios'? 44: 20
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

    }
});
