import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
}from 'react-native'

import PropTypes from 'prop-types';

import CheckBoxing from 'react-native-check-box'

export default class CheckBox extends Component {

    static propTypes = {
        clickEvent: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.item.checked
        }
    }

    render() {

        let {name,checked} = this.props.item;
        let {clickEvent} = this.props;

        return (
            <View style={styles.container}>
                <CheckBoxing
                    onClick={()=>{
                        this.setState({
                            isChecked: !this.state.isChecked
                        },()=>{
                            this.props.item.checked = this.state.isChecked
                            clickEvent(this.props.item)
                        })
                    }}
                    isChecked={this.state.isChecked}
                    isIndeterminate={false}
                    rightTextView={
                        <Text>{name}</Text>
                    }
                    checkedImage={<Image
                        source={require('./../res/img/ic_check_box.png')}
                    />}
                    unCheckedImage={<Image
                        source={require('./../res/img/ic_check_box_outline_blank.png')}
                    />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    nameStyle: {

    }
})
