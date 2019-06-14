import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'

import PropTypes from 'prop-types'

export default class LSCLoading extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        obj: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View/>
        )
    }
}
