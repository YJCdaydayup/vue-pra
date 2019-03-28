import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native'

import {VictoryBar,VictoryScatter, VictoryChart, VictoryTheme, VictoryLine} from 'victory-native'

export default class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scatterData: this.getScatterData()
        };
    }

    componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
    }

    getScatterData() {
        const colors =[
            "violet", "cornflowerblue", "gold", "orange",
            "turquoise", "tomato", "greenyellow"
        ];
        const symbols = [
            "circle", "star", "square", "triangleUp",
            "triangleDown", "diamond", "plus"
        ];

        let range = [];
        for (let i = 1;i< 25;i++) {
            range.push(i);
        }

        return range.map((index) => {
            const scaledIndex = Math.floor(index % 7);return {
                x: Math.random(10, 50),
                y: Math.random(2, 100),
                size: Math.random(8) + 3,
                symbol: symbols[scaledIndex],
                fill: colors[Math.random(0, 6)],
                opacity: 0.6
            };
        });
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <VictoryChart animate={{ duration: 2000, easing: "bounce" }}>
                    <VictoryScatter
                        data={this.state.scatterData}
                        style={{
                            data: {
                                fill: (d) => d.fill,
                                opacity: (d) => d.opacity
                            }
                        }}
                    />
                </VictoryChart>

            </View>
        )
    }

    componentDidMount() {
        this.setStateInterval = window.setInterval(() => {
            this.setState({
                scatterData: this.getScatterData()
            });
        }, 3000);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
