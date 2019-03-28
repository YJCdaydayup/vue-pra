import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import {DatePicker} from './../component_view/DatePicker'

export default class news extends Component {

    constructor(props) {
        super(props);

        this._getDate = this._getDate.bind(this);
    }

    render() {
        return (
           <DatePicker
               onSure={this._getDate}
               pickerType="date"
               textStyle={
                   ()=>{
                       return {
                           color: 'red'
                       }
                   }
               }
           />
        )
    }

    _getDate(func) {
        alert(func)
    }
}