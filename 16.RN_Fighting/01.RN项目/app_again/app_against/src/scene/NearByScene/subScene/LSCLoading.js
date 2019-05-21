import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
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

    shouldComponentUpdate(newVal, oldVal) {
        console.log('shouldComponentUpdate')
        console.log('newVal: ',newVal)
        console.log('oldVal: ',oldVal)
        return true;
    }

    componentWillUpdate(newVal, oldVal) {
        console.log('componentWillUpdate')
        console.log('newVal: ',newVal)
        console.log('oldVal: ',oldVal)
        return true;
    }

    componentDidUpdate(newVal, oldVal) {
        console.log('componentDidUpdate')
        console.log('newVal: ',newVal)
        console.log('oldVal: ',oldVal)
        return true;
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        color: 'red'
                    }}
                >{this.props.count}</Text>
                {parseInt(this.props.count) % 2 === 1?<View
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'orange'
                    }}
                />: null}
                <Text>{this.props.obj.title}</Text>
            </View>
        )
    }
}