import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native'

export default class Page1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {setParams,navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Page1</Text>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text)=>{
                        setParams({
                            title: text,
                        })
                    }}
                />
                <Button
                    title="Page2"
                    onPress={()=>{
                        navigate('Page2',{
                            mode: 'edit'
                        })
                    }}
                />
                <Button
                    title="改变主题"
                    onPress={()=>{
                        setParams({
                            theme: {
                                tintColor: 'orange',
                                updateTime: new Date().getTime()
                            }
                        })
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
    },
    inputStyle: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: '#222',
        paddingLeft: 8,
        marginVertical: 20
    }
})
