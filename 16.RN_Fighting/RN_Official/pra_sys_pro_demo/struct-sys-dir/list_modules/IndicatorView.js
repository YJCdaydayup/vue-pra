import React, {Component} from 'react'
import {
    StyleSheet,
    ActivityIndicator,
    View,
    Text,
    SafeAreaView
} from 'react-native'

let {width, height} = require('Dimensions').get('window');

export default class IndicatorView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            showingLoading: this.props.showLoading
        }
    }

    render() {
        let title = this.state.title;
        return (
            this.state.showingLoading ? (
                <View ref="container" style={styles.container}>
                    <View style={styles.innderStyle}>
                        <ActivityIndicator
                            style={styles.indicatorStyle}
                            color="red"
                            size="large"
                            animating={this.state.isActivityShowing}
                        />
                        <Text style={{
                            color: '#fff'
                        }}>{title}</Text>
                    </View>
                </View>
            ) : null
        )
    }

    hide = () => {
        this.setState({
            showingLoading: false
        })
    }
}


const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        paddingTop: 200
    },
    innderStyle: {
        width: 120,
        height: 120,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    indicatorStyle: {
        marginBottom: 10
    }
})
