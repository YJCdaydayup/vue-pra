import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    SwipeableFlatList
} from 'react-native'

const {width, height} = require('Dimensions').get('window')


export default class Page3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refresh: false,
            listData: []
        }

        this.getNewData = this.getNewData.bind(this);
        this.getData = this.getData.bind(this);
    }

    getNewData() {
        this.setState({
            refresh: true
        })
        let newData = []
        for (let i = 0; i < 2; i++) {
            newData.push('new data')
        }
        setTimeout(() => {
            this.setState({
                refresh: false,
                listData: [...newData, ...this.state.listData]
            })
        }, 1500)
    }

    getData() {
        let newData = []
        for (let i = this.state.listData.length; i < this.state.listData.length + 5; i++) {
            newData.push(i)
        }
        setTimeout(() => {
            this.setState({
                listData: [...this.state.listData, ...newData]
            })
        }, 1500)
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <View style={style.container}>
                <SwipeableFlatList
                    data={this.state.listData}
                    renderItem={(data)=>{
                        return (
                            <Text style={style.item}>{data.item}</Text>
                        )
                    }}
                    refreshing={this.state.refresh}
                    onRefresh={this.getNewData}
                    onEndReachedThreshold={.3}
                    onEndReached={this.getData}
                    ListEmptyComponent={<Text style={style.tipComponent}>哈哈哈</Text>}
                    ListFooterComponent={<Text style={style.tipComponent}>获取更多数据</Text>}
                    keyExtractor={(item, index) => index}
                    // progressViewOffset={300}
                    renderQuickActions={(data) => {
                        return <View style={style.btnWrap}>
                            <Text style={style.btn}>删除</Text>
                        </View>
                    }}
                    maxSwipeDistance={90}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    item: {
        backgroundColor: "gray",
        marginBottom: 10,
        height: 150,
        lineHeight: 150,
        textAlign: "center",
        width: width
    },
    btnWrap: {
        backgroundColor: "#fff",
        alignItems: 'flex-end',
        width: 90,
        height: 150
    },
    btn: {
        width: 90,
        textAlign: "center",
        lineHeight: 150,
        backgroundColor: 'red',
        color: '#fff'
    },
    tipComponent:{
        textAlign: "center", marginBottom: 10
    }
})
