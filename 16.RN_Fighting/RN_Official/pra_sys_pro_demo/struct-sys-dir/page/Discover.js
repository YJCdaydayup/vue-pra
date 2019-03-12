import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

const font_rate = 20;

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view'

import CountryPage from './../list_modules/country'
import NewsPage from './../list_modules/news'
import NoticePage from './../list_modules/notice'
import TabBarView from './../component_view/tabBarComponent'

export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['新闻', '通知', '国家']
        }
    }

    render() {

        let tabNames = this.state.tabNames;

        return (
            <View style={styles.container}>
                <ScrollableTabView ref="tab"
                    renderTabBar={() => <TabBarView
                        ref={(bar)=>{this.tabBar = bar}}
                        tabNames={tabNames}
                    />}
                    onScroll={this._onScroll.bind(this)}
                >
                    <CountryPage
                        navigation={this.props.navigation}
                        tabLabel="Country"
                    />
                    <NewsPage
                        tabLabel="News"
                    />
                    <NoticePage
                        tabLabel="Notice"
                    />
                </ScrollableTabView>
            </View>
        )
    }

    _onScroll = (e) => {
        this.tabBar.changeFont(e);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f7'
    }
})
