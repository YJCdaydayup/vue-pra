import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

let Dimensons = require('Dimensions');
let {width} = Dimensons.get('window');
let ImgData = require('./Data.json');
let timer;

export default class Test1 extends Component {

    state = {
        currentPage: 0
    }

    static defaultProps = {
        duration: 2000
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView ref="scrollView"
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={(event) => {
                                this.scrollEnd(event)
                            }}

                            onScrollBeginDrag={(e) => {
                                this.beginDrag(e)
                            }}

                            onScrollEndDrag={(e) => {
                                this.endDrag(e);
                            }}

                >
                    {this.createChildImgs()}
                </ScrollView>
                <View style={styles.pageViewStyle}>
                    {this.renderSpotView()}
                    <Text
                        style={{
                            position: 'absolute',
                            left: 0,
                            color: '#fff',
                            paddingLeft: 5,
                            letterSpacing: 1,
                            fontWeight: 'bold'
                        }}
                        numberOfLines={1}
                    >{this.getCurrentText()}</Text>
                </View>
            </View>
        );
    }

    getCurrentText() {
        var currentPage = this.state.currentPage,
            imgData = ImgData.data,
            title = imgData[currentPage].title;
        return title;
    }

    beginDrag(e) {
        clearInterval(timer);
    }

    endDrag(event) {
        let imgData = ImgData.data;
        let offsetX = event.nativeEvent.contentOffset.x;
        let newCurrentPage = Math.floor(offsetX / width);
        let currentPage = this.state.currentPage;
        if (newCurrentPage === currentPage) {
            currentPage++;
            if (currentPage >= imgData.length) {
                currentPage = 0;
            }
            this.setState({
                currentPage: currentPage
            });
        }
        this.startTimer();
    }

    scrollEnd(event) {
        let offsetX = event.nativeEvent.contentOffset.x;
        let currentPage = Math.floor(offsetX / width);
        this.setState({
            currentPage: currentPage
        });
    }

    componentDidMount() {
        this.startTimer();
    }

    startTimer() {
        let imgData = ImgData.data;
        timer = setInterval(() => {
            let currentPage = this.state.currentPage;
            currentPage++;
            if (currentPage >= imgData.length) {
                currentPage = 0;
            }
            this.setState({
                currentPage: currentPage
            });

            var offfsetX = Math.floor(width * currentPage),
                scrollView = this.refs.scrollView;
            scrollView.scrollTo({x: offfsetX, y: 0, animated: this.props.duration});

        }, this.props.duration);
    }

    renderSpotView() {
        let spots = [];
        let imgData = ImgData.data;
        for (var i = 0; i < imgData.length; i++) {
            let style = i === this.state.currentPage ? {color: 'orange', fontSize: 30, marginTop: -2} : {color: '#fff'}
            spots.push(
                <Text
                    key={i}
                    style={[{fontSize: 25, marginLeft: 5}, style]}
                >
                    &bull;
                </Text>
            )
        }
        return spots;
    }

    createChildImgs() {
        let imgs = [];
        let imgData = ImgData.data;
        for (var i = 0; i < imgData.length; i++) {

            imgs.push(
                <Image
                    key={i}
                    source={{uri: imgData[i].img}}
                    style={{width: width, height: 150}}
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
        height: 30,
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});
