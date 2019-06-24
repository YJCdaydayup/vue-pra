import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import PropTypes from 'prop-types'

export default class LSCPopverComponent extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        getAnchorView: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this._closePopver = this._closePopver.bind(this);
        this.state = {
            isVisible: false,
            style: {}
        }
    }

    /**
     * 开启下拉框
     */
    open() {
        this._showPopver();
    }

    render() {
        return (
            this.state.isVisible ? <View style={this.state.style}>
                {this.props.items.map((item, index) => {
                    return (
                        <TouchableOpacity>
                            <Text
                                key={index}
                                style={styles.itemStyle}>{item}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View> : null
        )
    }

    _closePopver() {

    }

    _showPopver() {
        let anchor = this.props.getAnchorView();
        console.log(anchor);
        anchor.measure((ox, oy, width, height, px, py) => {
            this.setState({
                isVisible: true
            }, () => {
                this.setState({
                    style: {
                        marginTop: px,
                        marginLeft: py
                    }
                })
            });
        });
    }

    _closePopver() {
        this.setState({
            isVisible: false
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemStyle: {}
})
