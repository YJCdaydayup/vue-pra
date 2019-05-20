import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Animated
} from 'react-native'

import ParallaxScrollView from 'react-native-parallax-scroll-view'

let data = [
    'A',
    'B',
    'C'
]

export default class ParerelComponent extends Component {
    constructor(props) {
        super(props);
    }

    createFlatList() {
        return <FlatList
            data={data}
            renderItem={this._renderItem}
        />
    }

    _renderItem({item}) {
        return (
            <Text>{item}</Text>
        )
    }

    render() {
        let scrollView = this.createFlatList();
        return (
            <View style={styles.container}>
                <ParallaxScrollView
                    backgroundColor="blue"
                    contentBackgroundColor="pink"
                    parallaxHeaderHeight={300}
                    // renderScrollComponent={() => <Animated.View />}
                    renderScrollComponent={() => <Animated.View />}
                    renderForeground={() => (
                        <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Hello World!</Text>
                        </View>
                    )}>
                    <View style={{ height: 500 }}>
                        <Text>Scroll me</Text>
                    </View>
                </ParallaxScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})