import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

import PropTypes from 'prop-types'

export default class PraCheckBox extends Component {
    constructor(props) {
        super(props)
    }

    static propTyps = {
        leftText: PropTypes.string,
        leftTextView: PropTypes.element,
        leftTextStyle: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.object
        ]),
        rightText: PropTypes.string,
        rightTextView: PropTypes.element,
        rightTextStyle: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object
        ]),
        checkedImage: PropTypes.element,
        unCheckedImage: PropTypes.element,
        onClick: PropTypes.func.isRequired,
        isChecked: PropTypes.bool.isRequired,
        isIndeterminate: PropTypes.bool.isRequired,
        indeterminateImage: PropTypes.element,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        isChecked: false,
        isIndeterminate: false,
        leftTextStyle: {},
        rightTextStyle: {}
    }

    _renderLeft() {
        if (this.props.leftTextView) return this.props.leftTextView;
        if (!this.props.leftText) return null;
        return <Text style={[this.props.leftTextStyle, styles.leftTextStyle]}>{this.props.leftText}</Text>
    }

    _renderRight() {
        if (this.props.rightTextView) return this.props.rightTextView;
        if (!this.props.rightText) return null;
        return <Text style={[this.props.rightTextStyle, styles.rightTextStyle]}>{this.props.leftText}</Text>
    }

    _renderImage() {
        if (this.props.isIndeterminate) {
            return this.props.indeterminateImage ? this.props.indeterminateImage : this.genCheckedImage();
        }
    }

    genCheckedImage() {
        let source;
        if (this.props.isIndeterminate) {
            source = require('./../res/img/ic_insert_emoticon.png')
        } else {
            source = this.props.isChecked ? require('./../res/img/ic_check_box.png') : require('./../res/img/ic_check_box_outline_blank.png')
        }
        return <Image
            source={source}
        />
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onClick}
                disable={this.props.disabled}
            >
                <View
                    style={styles.container}
                >
                    {this._renderLeft()}
                    {this._renderImage()}
                    {this._renderRight()}
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    leftTextStyle: {
        fontSize: 18,
        color: '#000'
    },
    rightTextStyle: {
        fontSize: 18,
        color: '#000'
    }
})
