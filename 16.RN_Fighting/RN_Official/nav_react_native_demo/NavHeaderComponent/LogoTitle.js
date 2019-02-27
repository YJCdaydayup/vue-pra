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


export default class LogoTitle extends Component {

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
                    source={require('./../images/title.png')}
                />
            </TouchableOpacity>
        );
    }

    clickImg() {
        AlertIOS.alert(this.props.title);
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
});
