import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import LSCPopverComponent from './../../widget/LSCPopverComponent'

const ITEMS = [
    '新闻',
    '摘要',
    '广告'
]

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text ref="dropView"
                      onPress={()=>{
                          console.log(this.refs.dropView)
                          this.popverComponent.open();
                      }}
                >Order</Text>
                <LSCPopverComponent ref={(ref)=>{
                    this.popverComponent = ref;
                }} items={ITEMS} getAnchorView={()=>this.refs.dropView}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
