import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import LeftButton from './../NavHeaderComponent/LeftButton'

export default class DetailScreen extends Component {

    static navigationOptions = (({navigation}) => {
        console.log(navigation)
        return {
            title: navigation.getParam('otherParam', '默认值')
            // title: String(navigation.state.params.itemID),
            // headerLeft: <LeftButton navigation={navigation}/>
            // headerStyle: {
            //     backgroundColor: 'orange'
            // },
            // headerTintColor: 'red',
            // headerTitleStyle: {
            //     color: 'green'
            // }
        }
    })

    render() {
        const {navigation} = this.props;
        let itemID = navigation.getParam('itemID', 168);
        let otherParam = navigation.getParam('otherParam', '默认值');

        return (
            <View style={styles.container}>
                <Text>我是Detail</Text>
                <View
                    style={{
                        marginBottom: 100,
                        backgroundColor: '#f3f4f5'
                    }}
                >
                    <Text>{itemID}</Text>
                    <Text>{JSON.stringify(otherParam)}</Text>
                </View>
                <Button
                    title="继续跳转"
                    onPress={() => {
                        this.props.navigation.push('Detail');
                    }}
                />
                <Button
                    title="返回上一界面"
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                />
                <Button
                    title="返回到根界面"
                    onPress={() => {
                        this.props.navigation.popToTop();
                    }}
                />
                <Button
                    title="navigate到Home界面"
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}
                />
                <Button
                    title="修改标题"
                    onPress={() => {
                        navigation.setParams({
                            'itemID': 16888888888
                        })
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
        backgroundColor: '#F5FCFF',
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
});
