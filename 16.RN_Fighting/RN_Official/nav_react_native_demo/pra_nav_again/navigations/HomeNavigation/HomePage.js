import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native'

export default class HomePage extends Component {

    _keyExtractor = (item, index) => item.id;

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            base_url: 'http://api.budejie.com/api/api_open.php?a=list&c=data&type=29'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this._separator}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    // numColumns={3}
                    // columnWrapperStyle={{borderWidth: 2, borderColor: 'black', paddingLeft: 20}}
                    getItemLayout={(data, index) => (
                        {length: 100, offset: (100 + 2) * index, index}
                    )}
                />
            </View>
        )
    }


    refreshing() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('刷新成功')
        }, 1500)
    }

    _separator = () => {
        return <View style={{height: 2, backgroundColor: 'yellow'}}/>;
    }

    renderItem(item) {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
            >
                <View
                    style={styles.cellStyle}
                >
                    <Image
                        source={{uri: item.item.profile_image || 'https://img.mukewang.com/user/533e4ce900010ae802000200-100-100.jpg'}}
                        style={{
                            width: 80,
                            height: 80
                        }}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch(this.state.base_url).then((res) => res.json()).then((result) => {
            this.setState({
                dataSource: result.list
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cellStyle: {
        padding: 10
    }
});
