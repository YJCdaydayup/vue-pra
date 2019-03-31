/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    StatusBar
} from 'react-native';

const NAV_HEIGHT_IOS = 50;
const NAV_HEIGHT_AND = 44;
const STATUS_BAR_HEIGHT = 20;
const StatusBarShape = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.oneOf('default', 'light-content', 'dark-content'),
    hidden: PropTypes.bool
}
export default class NavgationBar extends Component {

    static propTypes = {
        style: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar: PropTypes.shape(StatusBarShape)
    }

    static defaultProps = {
       statusBar: {
           barStyle:  'light-content',
           hidden: false
       }
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hide: false
        }
    }

    render() {

        let status = <View style={[styles.statusBar]}>
            <StatusBar {...this.props.statusBar} />
        </View>
        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={styles.title}>{this.props.title}</Text>
        let content = <View style={styles.navBar}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>{titleView}</View>
            {this.props.rightButton}
        </View>
        return (
            <View style={[styles.container,this.props.style]}>
                {status}
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF'
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? NAV_HEIGHT_IOS : NAV_HEIGHT_AND
    },
    titleViewContainer: {
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0,
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0
    }
});
