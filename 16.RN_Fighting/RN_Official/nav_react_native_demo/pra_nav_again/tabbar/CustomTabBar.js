import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

import PropTypes from 'prop-types'

let Dimensions = require('Dimensions')
let {width} = Dimensions.get('window')

export default class CustomTabBar extends Component {

    static propTypes = {
        goToPage: PropTypes.func,
        activeTab: PropTypes.number,
        tabs: PropTypes.array,
        tabNames: PropTypes.array,
        tabIconNames: PropTypes.array,
        tabSelectIconNames: PropTypes.array
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tabBarStyle}>
                {this.props.tabs.map((tab, i) => {
                    return this.renderItem(tab, i)
                })}
            </View>
        )
    }

    renderItem(tab, i) {
        let color = i === this.props.activeTab ? {color: 'red'} : {color: 'purple'};
        let images = i === this.props.activeTab ? this.props.tabIconNames : this.props.tabSelectIconNames;

        return (
            <TouchableOpacity
                style={styles.tabStyle}
                onPress={() => {
                    this.props.goToPage(i)
                }}
                key={i}
            >
                <View style={styles.cellStyle}>
                    <Image
                        source={{uri:images[i]}}
                        style={{width: 30,height: 30}}
                    />
                    <Text style={color}>{this.props.tabNames[i]}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    tabBarStyle: {
        width: width,
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#f5f6f7'
    },
    tabStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    cellStyle: {
        alignItems: 'center'
    }
});