import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: this.props.item,
            funcs: this.props.showItem
        }
    }

    render() {
        let item = this.state.rowData;
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>{
                    this.state.funcs(item.title)
                }}
            >
                <View style={styles.itemStyle}>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles =StyleSheet.create({
    itemStyle: {
        marginVertical: 10
    }
})
