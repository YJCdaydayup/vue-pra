import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native'

import PropTypes from 'prop-types'

export default class DetailPage extends Component {

    static propTypes = {
        fatherRefreshEvent: PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    render() {
        let {fatherRefreshEvent} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text
                    onPress={()=>{
                        this.props.navigation.goBack();
                        fatherRefreshEvent('我是数据！！！');
                    }}
                >
                    返回
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
