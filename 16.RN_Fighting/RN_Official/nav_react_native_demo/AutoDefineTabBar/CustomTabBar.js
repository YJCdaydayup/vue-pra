import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window')

import PropTypes from 'prop-types';

export default class News extends Component {

    static propTypes = {
        goToPage: PropTypes.func,
        activeTab: PropTypes.number,
        tabs: PropTypes.array,

        tabNames: PropTypes.array,
        tabIconNames: PropTypes.array,
        tabSelectIconNames: PropTypes.array
    };

    render() {
        return (
            <View style={styles.tabStyle}>
                {this.props.tabs.map((tab, i) => {
                    return this.renderItem(tab, i)
                })}
            </View>
        );
    }

    renderItem(tap, i) {
        let img = i === this.props.activeTab ? this.props.tabSelectIconNames[i] : this.props.tabIconNames[i];
        let color = i === this.props.activeTab ? {color: 'red'} : {color: 'purple'}
        return (
            <TouchableOpacity
                key={i}
                onPress={() => this.props.goToPage(i)}
                style={styles.tab}
            >
                <View style={styles.cellStyle}>
                    <Image
                        source={{uri: img}}
                        style={{width: 30, height: 30, borderRadius: 15}}
                    />
                    <Text style={color}>{this.props.tabNames[i]}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    tabStyle: {
        flexDirection: 'row',
        width: width,
        height: 70,
        backgroundColor: '#f3f4f5',
        paddingBottom: 10
    },
    tab: {
        flex: 1
    },
    cellStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
