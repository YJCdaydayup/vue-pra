import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    AlertIOS
} from 'react-native';

import Home from './Home'
import News from './News'
import Find from './Find'
import Mine from './Mine'

var ScrollableTabView = require('react-native-scrollable-tab-view');
import CustomeTabBar from './CustomTabBar'

export default class Main extends Component {

    static imageName = 'https://img.mukewang.com/user/533e4ce900010ae802000200-100-100.jpg'
    static selectedImageName = 'https://img.mukewang.com/user/5344e6d10001867401400140-100-100.jpg'

    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['Home','News','Find','Mine'],
            tabIconNames: [Main.imageName,Main.imageName,Main.imageName,Main.imageName],
            tabSelectIconNames: [Main.selectedImageName,Main.selectedImageName,Main.selectedImageName,Main.selectedImageName],
    }
    }

    render() {

        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        let tabSelectIconNames = this.state.tabSelectIconNames;

        return (
            <ScrollableTabView
                renderTabBar={() => {
                    return (<CustomeTabBar
                        tabNames={tabNames}
                        tabIconNames={tabIconNames}
                        tabSelectIconNames={tabSelectIconNames}
                    />)
                }}
                tabBarPosition="bottom"
                scrollWithoutAnimation={true}
            >
                <Home tabLabel="Home"/>
                <News tabLabel="News"/>
                <Find tabLabel="Find"/>
                <Mine tabLabel="Mine"/>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
