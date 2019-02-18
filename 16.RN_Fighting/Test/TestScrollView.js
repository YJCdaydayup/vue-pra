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

    render() {
        return (
            <View
                style={styles.container}
            >
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}

                    onMomentumScrollEnd={(e)=>{
                        this.onScrollAnimationEnds(e)
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

    // 滚动完毕，写了就调用
    onScrollAnimationEnds(e) {
        console.log(e);
        // 拿到偏移量
       let offsetX = e.nativeEvent.contentOffset.x;
        // 当前页数
        let currentPage = Math.floor(offsetX/width);
        // 更新状态机,刷新UI
        this.setState({
            currentPage: currentPage
        })
    }

    renderPage() {
        var pageArr = [];
        var imgArr = ImgData.data;
        for (var i = 0; i < imgArr.length; i++) {
            var style = i === this.state.currentPage? {color: 'orange'}: {color: '#fff'}
            pageArr.push(
                <Text
                    key={i}
                    style={[{fontSize: 25},style]}
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
