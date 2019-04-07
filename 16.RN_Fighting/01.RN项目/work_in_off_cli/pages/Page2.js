import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    RefreshControl,
    ActivityIndicator
} from 'react-native'


const CITIES = ['广州', '武汉', '深圳', '惠州', '上海', '北京'];

export default class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArray: CITIES,
            onLoading: false,
            loadingMore: false
        }
    }

    _keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    refreshControl={<RefreshControl
                        title={'Loading'}
                        colors={['red']}
                        tintColor={'red'}
                        refreshing={this.state.onLoading}
                        onRefresh={()=>{
                            this._loadData();
                        }}
                    />}
                    ListFooterComponent={()=>{
                        return (
                           !this.state.loadingMore?null:<View style={styles.indicatorStyle}>
                                <ActivityIndicator
                                    size={0}
                                    animating={true}
                                    color="red"
                                    style={{marginBottom: 10}}
                                />
                                <Text style={styles.titleStyle}>正在加载更多...</Text>
                            </View>
                        )
                    }}
                    onEndReached={()=>{
                        this._loadData(true)
                    }}
                />
            </View>
        )
    }

    _loadData(more) {
      if (more) {
          this.setState({
              loadingMore: true
          },()=>{
              setTimeout(()=>{
                  this.setState({
                      loadingMore: false,
                      dataArray: this.state.dataArray.concat(CITIES)
                  })
              },2000)
          })
          return;
      }

        this.setState({
            onLoading: true
        }, () => {
            setTimeout(() => {
                let dataArray = [];
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i]);
                }
                this.setState({
                    dataArray: dataArray,
                    onLoading: false
                })
            }, 2000)
        })
    }

    _renderItem(rowData) {
        return (
            <View style={styles.itemStyle}>
                <Text style={styles.textStyle}>{rowData.item}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f5f6'
    },
    itemStyle: {
        width: 200,
        height: 100,
        backgroundColor: '#456',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#fff',
        fontSize: 20
    },
    indicatorStyle: {
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 16,
        color: 'red',
        marginTop: 10
    }
})
