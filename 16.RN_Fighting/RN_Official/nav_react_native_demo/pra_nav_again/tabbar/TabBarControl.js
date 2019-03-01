import React, {Component} from 'react'
import {
    StyleSheet,
    View
} from 'react-native'

import ScrollableTabView from 'react-native-scrollable-tab-view'

import {HomeContainer} from './../navigations/HomeNavigation/HomeNavigation'
import {NewsContainer} from './../navigations/NewsNavigation/NewsNavigation'
import {FindContainer} from './../navigations/FindNavigation/FindNavigation'
import {MineContainer} from './../navigations/MineNavigation/MineNavigation'
import News from "../../AutoDefineTabBar/CustomTabBar";
import CustomTabBar from "./CustomTabBar";

export default class TabBarControl extends Component {

    static imageName = 'https://img.mukewang.com/user/533e4ce900010ae802000200-100-100.jpg'
    static selectedImageName = 'https://img.mukewang.com/user/5344e6d10001867401400140-100-100.jpg'

    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['Home', 'News', 'Find', 'Mine'],
            tabIconNames: [TabBarControl.imageName, TabBarControl.imageName, TabBarControl.imageName, TabBarControl.imageName],
            tabSelectIconNames: [TabBarControl.selectedImageName, TabBarControl.selectedImageName, TabBarControl.selectedImageName, TabBarControl.selectedImageName],
        }
    }

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => {
                    return <CustomTabBar
                        tabNames={this.state.tabNames}
                        tabIconNames={this.state.tabIconNames}
                        tabSelectIconNames={this.state.tabSelectIconNames}
                    />
                }}
                tabBarPosition="bottom"
                locked={true}
                scrollWithoutAnimation={true}
            >
                <HomeContainer tabLabel="Home"/>
                <NewsContainer tabLabel="News"/>
                <FindContainer tabLabel="Find"/>
                <MineContainer tabLabel="Mine"/>
            </ScrollableTabView>
        )
    }
}