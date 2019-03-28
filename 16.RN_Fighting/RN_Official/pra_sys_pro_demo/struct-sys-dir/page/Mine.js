import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    AlertIOS,
    PanResponder,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'


import MyButton from './../component_view/MyButton'

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this._saveLocal = this._saveLocal.bind(this);
    }

    render() {
        return (
            <View
                ref={(ref) => {
                    this.view = ref
                }}
                style={styles.box}
            >
                <MyButton
                    title="存储"
                    click={this._saveLocal}
                />

            </View>
        )
    }

    _saveLocal() {

        let person = {
            name: 'Sara',
            age: 18
        }

        AsyncStorage.setItem('person',JSON.stringify(person),(error)=>{
            if (error) {
                alert('存储失败')
            }else {
                alert('存储成功')
            }
        })
    }
}


const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#333'
    }
})
