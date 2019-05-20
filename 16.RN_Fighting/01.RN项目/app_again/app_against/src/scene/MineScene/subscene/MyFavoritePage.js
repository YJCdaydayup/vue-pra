import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    PixelRatio,
    StyleSheet,
    Text,
    View,
    FlatList,
    Platform
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view'
import NavigationBar from './../../../widget/NavigationBar'
import MineHandler from './../mineHandler/MineHandler'

export default class MyFavoritePage extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }

    componentDidMount() {
        MineHandler.getLocalFavoriteModel().then((models)=>{
            this.updateState({
                dataSource: models
            }, ()=>{

            })
        })
    }

    updateState(dic, callback) {
        if (!this) return;
        this.setState(dic,callback);
    }

    render() {
        const {
            onScroll = () => {
            }
        } = this.props;
        return (
            <FlatList
                ref="ListView"
                style={styles.container}
                data={this.state.dataSource}
                renderItem={(rowData) => (
                    <View key={rowData} style={styles.row}>
                        <Text>
                            {JSON.stringify(rowData.item)}
                        </Text>
                    </View>
                )}
                keyExtractor={(item, index)=> Math.random(2).toString()}
                renderScrollComponent={props => (
                    <ParallaxScrollView
                        onScroll={onScroll}
                        backgroundColor="#eee"
                        headerBackgroundColor="#fff"
                        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                        backgroundSpeed={10}
                        // 过渡背景
                        renderBackground={() => (
                            <View key="background">
                                <View style={{
                                    position: 'absolute',
                                    top: 0,
                                    width: window.width,
                                    backgroundColor: '#fff',
                                    height: PARALLAX_HEADER_HEIGHT
                                }}/>
                            </View>
                        )}

                        renderForeground={() => (
                            <View key="parallax-header" style={styles.parallaxHeaders}>
                                <ImageBackground
                                    source={{uri: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1366326655,412860124&fm=58&bpow=407&bpoh=529'}}
                                    style={{
                                        width: window.width,
                                        height: PARALLAX_HEADER_HEIGHT,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <View style={styles.info}>
                                        <Text style={{
                                            marginBottom: 16,
                                            fontWeight: "500",
                                            fontSize: 18,
                                            textAlign: 'center',
                                            width: window.width
                                        }}>狼</Text>
                                        <Text style={{
                                            color: 'gray',
                                            textAlign: 'center',
                                            width: window.width
                                        }}>微信号：yangli332609</Text>
                                    </View>
                                </ImageBackground>

                            </View>
                        )}

                        // 真正的导航头部
                        renderStickyHeader={() => {
                            return (
                                <View key="sticky-header" style={styles.stickySection}>
                                    <Image
                                        source={{uri: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1366326655,412860124&fm=58&bpow=407&bpoh=529'}}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 6,
                                        }}
                                    />
                                    <View>
                                        <Text style={{
                                            marginBottom: 6,
                                            fontWeight: "500",
                                            fontSize: 18,
                                        }}>狼</Text>
                                        <Text style={{
                                            color: 'gray',
                                        }}>微信号：yangli332609</Text>
                                    </View>
                                </View>
                            )
                        }}

                        // 一直存在的背景
                        renderFixedHeader={() => (
                            <View key="fixed-header" style={[styles.fixedSection]}>
                                {NavigationBar.getBackButton(() => {
                                    this.props.navigation.goBack();
                                }, '#fff')}
                                {/*<Text style={styles.fixedSectionText}*/}
                                {/*onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>*/}
                                {/*Scroll to top*/}
                                {/*</Text>*/}
                            </View>
                        )}
                    />
                )}
            />
        );
    }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = Platform.OS === 'ios' ? 90 : 70;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        paddingTop: 50,
        paddingBottom: 20,
        height: STICKY_HEADER_HEIGHT,
        width: window.width,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    fixedSection: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    fixedSectionText: {
        fontSize: 20,
        backgroundColor: '#fff'
    },
    parallaxHeaders: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    }
});