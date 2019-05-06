import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    ViewPropTypes as RNViewPropTypes
} from 'react-native'

const Dimensions = require('Dimensions');

let {width, height} = Dimensions.get('window');

import PropTypes from 'prop-types'

const ViewPropTypes = RNViewPropTypes || View.propTypes;

export default class Loading extends Component {

    static propTypes = {
        ...ViewPropTypes,
        title: PropTypes.string,
        titleStyle: PropTypes.object,
        duration: PropTypes.number,
        isAnimating: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        title: "正在加载中...",
        duration: 1000
    }

    componentWillReceiveProps(oldProps) {
        let {isAnimating} = oldProps;
        this.setState({
            isAnimating: isAnimating || true
        }, () => {
            setTimeout(() => {
                this.setState({
                    isAnimating: false
                })
            }, this.props.duration)
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            isAnimating: false
        }
    }

    render() {
        let {title} = this.props;
        return (
            this.state.isAnimating ? <View style={[styles.container, this.props.style]}>
                <View style={styles.indicatorBox}>
                    <ActivityIndicator
                        style={styles.indicatorStyle}
                        animating={this.state.isAnimating}
                        color="red"
                        size="large"
                    />
                    <Text style={[styles.text, this.props.titleStyle]}>{title}</Text>
                </View>
            </View> : null
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "rgba(29,29,29,0.3)"
    },
    indicatorBox: {
        width: width * 0.5,
        height: width * 0.4,
        paddingTop: 22,
        paddingLeft: 10,
        paddingRight: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {h: 30, w: 30},
        shadowRadius: 8,
        shadowOpacity: 0.5,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: height * 0.25
    },
    indicatorStyle: {},
    text: {
        fontSize: 16,
        color: '#000',
        marginTop: 16
    }
})
