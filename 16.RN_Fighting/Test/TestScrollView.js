/**
 * Created by yangli on 2019/2/18.
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert
} from 'react-native';

let ImgData = require('./data.json');

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

export default class Test extends Component {

    state = {
        currentPage: 0
    }

    static defaultProps = {
        duration: 1000
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}

                    onMomentumScrollEnd={(e)=> {
                        this.onScrollAnimationEnds(e)
                    }}

                    onScrollBeginDrag={(e)=>{
                        this.scrollBeginDrag(e);
                    }}

                    onScrollEndDrag={(e)=>{
                        this.scrollEndDrag(e);
                    }}
                >
                    {this.renderAllChildImage()}
                </ScrollView>
                <View
                    style={styles.pageViewStyle}
                >
                    {this.renderPage()}
                </View>
            </View>
        );
    }

    // UI出来了开启定时器
    componentDidMount() {
        // 开启定时器
        this.startTimer();
    }

    scrollEndDrag(e) {
        this.startTimer();
    }

    scrollBeginDrag(e) {
        clearInterval(this.timer);
    }

    startTimer() {
        // setInterval里面的this是window，需要将this通过变量获取到再使用
        var obj = this;
        var scrollView = this.refs.scrollView;
        var imgCount = ImgData.data.length;
        this.timer = setInterval(()=>{
            var currentPage = 0;
            if (obj.state.currentPage +1 >= imgCount) {
                currentPage = 0;
            }else {
                currentPage = obj.state.currentPage + 1;
            }
            obj.setState({
                currentPage: currentPage
            })
            var offsetX = currentPage * width;
            scrollView.scrollTo({
                x: offsetX,
                y: 0,
                animated: true
            });

        },this.props.duration);
    }

    // 滚动完毕，写了就调用
    onScrollAnimationEnds(e) {
        console.log(e);
        // 拿到偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        // 当前页数
        let currentPage = Math.floor(offsetX / width);
        // 更新状态机,刷新UI
        this.setState({
            currentPage: currentPage
        })
        console.log(e.nativeEvent);
    }

    renderPage() {
        var pageArr = [];
        var imgArr = ImgData.data;
        for (var i = 0; i < imgArr.length; i++) {
            var style = i === this.state.currentPage ? {color: 'orange'} : {color: '#fff'}
            pageArr.push(
                <Text
                    key={i}
                    style={[{fontSize: 25}, style]}
                >&bull; </Text>
            )
        }
        return pageArr;
    }

    renderAllChildImage() {
        let imgs = [];
        let data = ImgData.data;
        for (var i = 0; i < data.length; i++) {
            imgs.push(
                <Image
                    key={i}
                    style={{width: width, height: 150}}
                    source={{uri: data[i].img}}
                />
            )
        }
        return imgs;
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 150
    },
    pageViewStyle: {
        width: width,
        height: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});
