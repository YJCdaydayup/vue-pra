import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    AlertIOS
} from 'react-native';

export default class ModalPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Modal</Text>
                <Button
                    title="Dismiss"
                    onPress={()=>{
                        this.props.navigation.push('Detail');
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    headerStyle: {
        backgroundColor: 'orange'
    }
});
