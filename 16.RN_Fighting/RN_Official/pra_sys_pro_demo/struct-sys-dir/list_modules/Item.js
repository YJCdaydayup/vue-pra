import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
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
                    <Image
                        source={{uri: item.img}}
                        style={{
                            width: 150,
                            height: 80,
                            marginHorizontal: 10
                        }}
                    />
                    <Text numberOfLines={1}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles =StyleSheet.create({
    itemStyle: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})
