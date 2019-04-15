import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import LaunageDao, {Lanuage_Flag} from './../common/AgainLanuageDao'
import SortableListView from 'react-native-sortable-listview'

export default class Page4 extends Component {
    constructor(props) {
        super(props);
        this.language = new LaunageDao(Lanuage_Flag.flag_key);
        this.state = {
            checkedArray: []
        }
    }

    componentDidMount() {
        this._loadData();
    }

    _loadData() {
        let checkedArray = [];
        this.language.fetch().then((data) => {
            data.forEach((item, index) => {
                if (item.checked) {
                    checkedArray.push(item);
                }
            })
        })
        this.setState({
            checkedArray: checkedArray
        })
    }

    render() {
        return (
            <View>
                <Text>Page4</Text>
            </View>
        )
    }
}