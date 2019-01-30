/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    SectionList
} from 'react-native';

export default class MyApp extends Component {

    getMoviesFromApiAsync() {
        return fetch("https://facebook.github.io/react-native/movies.json").then((res)=>{
            return res.json();
        }).then((res)=>{
            Alert.alert(JSON.stringify(res.movies));
        })
    }

    componentDidMount() {
        this.getMoviesFromApiAsync();
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        backgroundColor: 'rgba(29,29,29,0.1)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'red'
    },
    sectionHeader: {
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 10,
        paddingBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        color: 'red',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
});

AppRegistry.registerComponent('MyApp', () => MyApp);

// class Blink extends Component {
//
//     constructor(props) {
//         super(props)
//         this.state = {isShowText: true}
//
//         setInterval(() => {
//             this.setState((old) => {
//                 return {isShowText: !old.isShowText}
//             })
//         }, 1000)
//     }
//
//     render() {
//         if (!this.state.isShowText) {
//             return null;
//         }
//         return (
//             <Text>{this.props.text}</Text>
//         );
//     }
// }

// export default class MyApp extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: ''
//         }
//     }
//
//     _onPressButton() {
//         Alert.alert(Platform.OS)
//     }
//
//     _onLongPressButton() {
//         Alert.alert('长按按钮了...')
//     }
//
//     render() {
//         return (
/**
 <TextInput style={{marginTop: 200,height: 40, color: 'red'}} placeholder="Type here to translate" onChangeText={(text)=>this.setState({text:text})}/>
 <Text style={{padding: 10, fontSize: 42}}>
 { this.state.text.split(' ').map((word) => word || '🍕').join(' ')}
 </Text>
 <Button style={{color: 'red', backgroundColor: 'green',fontSize: 50}} onPress={()=>{
                   Alert.alert('你点击了按钮1');
                }} title="acsa"/>

 <View style={styles.container}>

 <View style={styles.buttonContainer}>
 <Button
 onPress={this._onPressButton}
 onLongPress={this._onLongPressButton}
 title="Press Me"
 />
 </View>
 <View style={styles.buttonContainer}>
 <Button
 onPress={this._onPressButton}
 title="Press Me"
 color="#841584"
 />
 </View>
 <View style={styles.alternativeLayoutButtonContainer}>
 <Button
 onPress={this._onPressButton}
 title="This looks great"
 />
 <Button
 onPress={this._onPressButton}
 title="OK!"
 color="#841584"
 />
 </View>
 </View>

 <View style={styles.container}>
 <View style={styles.buttonContainer}>
 <Button onPress={this._onPressButton} title="点击"/>
 </View>
 <TouchableHighlight onPress={this._onPressButton} underlayColor="orange">
 <View style={styles.buttonContainer}>
 <Text>点击</Text>
 </View>
 </TouchableHighlight>
 <TouchableNativeFeedback
 onPress={this._onPressButton}
 background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
 >
 <View style={styles.buttonContainer}>
 <Text>点击</Text>
 </View>
 </TouchableNativeFeedback>
 <TouchableWithoutFeedback onPress={this._onPressButton}>
 <View style={styles.buttonContainer}>
 <Text>点击</Text>
 </View>
 </TouchableWithoutFeedback>
 <TouchableOpacity onPress={this._onPressButton}>
 <View style={styles.button}>
 <Text style={styles.buttonText}>TouchableOpacity</Text>
 </View>
 </TouchableOpacity>
 </View>


 <ScrollView>
 <Text style={{fontSize: 96}}>Scroll  me plz</Text>
 <Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
 <Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
 <Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} /><Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
 <Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
 <Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
 <Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
 <Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
 <Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} /><Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
 <Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} /><Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} /><Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} /><Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} /><Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} /><Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} /><Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} /><Image source={{url: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
 </ScrollView>

 <View style={styles.box}>
 <FlatList style={{backgroundColor: 'orange',flex: 1}}
 data={[
                        {key: 'Devin'},
                        {key: 'acas'},
                        {key: 'Deviacasn'},
                        {key: 'Devascasin'},
                        {key: 'Deascasvin'},
                        {key: 'Devin'},
                        {key: 'Deascasvin'},
                        {key: 'Deacasccsacvin'},
                        {key: 'Deascascsascacasvin'},
                        {key: 'Deascacsaq   q   vin'},
                        {key: 'Devqdwdqvin'},
                    ]}
 renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
 />
 <View style={styles.pra}></View>
 </View>

 )
 }
 }
 */

// const styles = StyleSheet.create({
//     pra: {
//         width: 100,
//         height: 50,
//         backgroundColor: 'red'
//     },
//     box: {
//         flex: 1,
//         marginTop: 44,
//         marginBottom: 200,
//         flexDirection: 'row'
//     },
//     container: {
//         // flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'red'
//     },
//     buttonContainer: {
//         margin: 20
//     },
//     alternativeLayoutButtonContainer: {
//         margin: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         lineHeight: 44,
//     }
// });
