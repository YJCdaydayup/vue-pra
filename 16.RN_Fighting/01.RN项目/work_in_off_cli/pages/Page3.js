import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    SegmentedControlIOS
} from 'react-native'


export default class Page3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SegmentedControlIOS
                    values={['One', 'Two']}
                    selectedIndex={this.state.selectedIndex}
                    onChange={(event) => {
                        this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f5f6'
    }
})
