import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';


export default class LeftButton extends Component {

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>{
                    this.clickImg();
                }}
            >
                <Image
                    style={styles.imageStyle}
                    source={require('./../images/back.png')}
                />
            </TouchableOpacity>
        );
    }

    clickImg() {
        console.log(this.props.navigation);
        if (this.props.navigation) {
            this.props.navigation.goBack();
        }
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 20,
        height: 20,
        marginLeft: 10
    }
});
