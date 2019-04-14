/**
 * Created by yangli on 2019/4/6.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    SectionList
} from 'react-native'

const CITiES = [
    {
        data: ['北京','惠州','上海'],
        title: '一线'
    },
    {
        data: ['深圳','武汉'],
        title: '二三线'
    },
    {
        data: ['仙桃','天门','锦州'],
        title: '四线'
    }
];

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
                <SectionList
                    sections={this.state.dataArray}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    keyExtractor={(item, index) => item + index}
                    ItemSeparatorComponent={(opt)=>{
                        return (
                            <View style={styles.separator}/>
                        )
                    }}
                />
            </View>
        )
    }

    _renderSectionHeader({section}) {
        return (
            <View key={section.title} style={styles.headerStyle} >
                <Text style={{fontSize: 22, color: 'red'}}>{section.title}</Text>
            </View>
        )
    }

    _renderItem({index,item}) {
        return (
            <View key={item} style={styles.itemStyle}>
                <Text style={{fontSize: 20,color: '#d7f9s0'}}>{item}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerStyle: {
        height: 36,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemStyle: {
        height: 100,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: 'green',
        flex: 1
    }
});