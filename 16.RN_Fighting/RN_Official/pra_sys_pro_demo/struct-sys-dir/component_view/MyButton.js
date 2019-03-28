import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            click: this.props.click
        }

    }

    render() {

        let title = this.state.title;

        return (
           <TouchableOpacity
               onPress={this.props.click}
           >
               <View
                   style={styles.box}
               >
                   <Text
                       style={{
                           flex: 1,
                           textAlign: 'center',
                           lineHeight: 45,
                           color: 'black'
                       }}
                   >{title}</Text>
               </View>
           </TouchableOpacity>
        )
    }

    calArr() {
        let arr = this.state.arr;
        return arr.reduce((totle,currentValue,index)=>{
            console.log(index)
            return totle + currentValue;
        },0)
    }

}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 45,
        backgroundColor: 'snow'
    }
})
