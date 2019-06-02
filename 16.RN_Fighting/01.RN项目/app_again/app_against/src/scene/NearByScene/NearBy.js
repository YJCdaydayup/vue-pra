import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native'

import LSCLoading from './subScene/LSCLoading'
import NearByHandler from './NearByHandler/NearByHandler'

export default class NearBy extends Component {

    static defaultProps = {
        name: 'Sara'
    }

    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            obj: {title: 'title'}
        }
    }

    componentDidMount() {
        NearByHandler.asyncNetworkEvent();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>NearBy</Text>
                <Text>{this.props.name}</Text>
                <Button
                    onPress={()=>{
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }}
                    title="点击+1"
                />
                <Button
                    onPress={()=>{
                        this.setState({
                            count: 666
                        })
                    }}
                    title="传递666"
                />
                <LSCLoading count={this.state.count} obj={this.state.obj}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
