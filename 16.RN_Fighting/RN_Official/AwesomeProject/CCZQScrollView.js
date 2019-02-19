import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ScrollView,
    View
} from 'react-native';

const ImageData = require('./Data.json');

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class CCZQScrollView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            duration: 2000,
            currentPage: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderChildImgs()}
                </ScrollView>
                <View
                    style={styles.pageViewStyle}
                >
                    {this.renderSpotView()}
                </View>
            </View>
        )
    }

    renderSpotView() {
        let spots = [];
        let imageArrs = ImageData.data;
        for (var i = 0; i < imageArrs.length; i++) {
            var style = i === 0? {color: 'orange'}: {color: '#E8E8E8'};
            spots.push(
                <Text key={i}
                    style={[{fontSize: 25,marginTop: -4},style]}
                >•</Text>
            )
        }
        return spots;
    }

    renderChildImgs() {

        let allImage = [];

        //拿到图形数组
        let imageArrs = ImageData.data;

        //遍历
        for (var i = 0; i < imageArrs.length; i++) {

            //取出每一个单独的对象
            var imageItem = imageArrs[i];

            //创建组件放入数组
            allImage.push(
                <Image key={i} source={{uri: imageItem.img}} style={styles.imageStyle}>
                </Image>
            );
        }

        // 返回数组
        return allImage;
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 120,
        marginTop: 200
    },
    imageStyle: {
        width: width,
        height: 120
    },
    pageViewStyle: {
        width: width,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
