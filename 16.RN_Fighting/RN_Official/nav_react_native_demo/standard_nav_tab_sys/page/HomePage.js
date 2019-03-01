import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native'

export default class HomePage extends Component {

    navigationOptions = ((options)=>{
            return {
                tabBarLabel: '好友',
                headerTitle: '好友',
            }
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button
                    title="跳转Deal"
                    onPress={()=>{
                        this.props.navigation.push('Deal');
                    }}
                />
                <Button
                    title="跳转Mine"
                    onPress={()=>{
                        this.props.navigation.push('Mine');
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
        backgroundColor: '#f5f6f7'
    }
});
