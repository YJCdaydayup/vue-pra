/**
 * Created by yangli on 2019/4/6.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    SwipeableFlatList
} from 'react-native'

const CITiES = ['北京','惠州','上海','深圳','武汉'];

export default class SwipableFlatlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataArray: CITiES
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SwipeableFlatList
                    data={CITiES}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }

    _renderItem(rowData) {
        return (
            <View style={styles.item}>
                <Text>{rowData.item}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        width: 200,
        height: 100,
        marginVertical: 10,
        backgroundColor: 'green'
    }
});