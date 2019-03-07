import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view'

import CountryPage from './../list_modules/country'
import NewsPage from './../list_modules/news'
import NoticePage from './../list_modules/notice'
import TabBarView from './../component_view/tabBarComponent'

export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['新闻','通知','国家']
        }
    }

    render() {

        let tabNames = this.state.tabNames;

        return (
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={()=><TabBarView
                        tabNames={tabNames}
                    />}
                >
                    <CountryPage
                        tabLabel="Country"
                    />
                    <NewsPage
                        tabLabel="Country"
                    />
                    <NoticePage
                        tabLabel="Country"
                    />
                </ScrollableTabView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f7'
    }
})
