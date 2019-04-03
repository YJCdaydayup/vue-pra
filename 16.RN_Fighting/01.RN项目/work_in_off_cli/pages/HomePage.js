import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput
} from 'react-native'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>HomePage</Text>
                <Button
                    title="Page1"
                    onPress={()=>{
                        navigation.navigate('Page1',{
                            title: '标题'
                        })
                    }}
                />
                <Button
                    title="Tabbar"
                    onPress={()=>{
                        navigation.navigate('TabBar')
                    }}
                />
                <Button
                    title="DrawerStack"
                    onPress={()=>{
                        navigation.navigate('DrawerStack')
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
        backgroundColor: '#f1f4f1'
    }
})
