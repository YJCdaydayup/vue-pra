import React from 'react'
import {StatusBar} from 'react-native'

import {createBottomTabNavigator} from 'react-navigation'

import Home from './../scene/HomeScene/Home'
import NearBy from './../scene/NearByScene/NearBy'
import Order from './../scene/OrderScene/Order'
import Mine from './../scene/MineScene/Mine'

import TabBarItem from './../widget/TabBarItem'
import Color from './../widget/color'

export const AppBottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: "首页",
                tabBarIcon: ({tintColor, focused}) => {
                    return <TabBarItem name="home" tintColor={tintColor}/>
                }
            }
        },
        NearBy: {
            screen: NearBy,
            navigationOptions: {
                tabBarLabel: "附近",
                tabBarIcon: ({tintColor, focused}) => {
                    return <TabBarItem name="building" tintColor={tintColor}/>
                }
            }
        },
        Order: {
            screen: Order,
            navigationOptions: {
                tabBarLabel: "订单",
                tabBarIcon: ({tintColor, focused}) => {
                    return <TabBarItem name="reorder" tintColor={tintColor}/>
                }
            }
        },
        Mine: {
            screen: Mine,
            navigationOptions: {
                tabBarLabel: "我的",
                tabBarIcon: ({tintColor, focused}) => {
                    return <TabBarItem name="fonticons" tintColor={tintColor}/>
                }
            }
        }
    },
    {
        navigationOptions: ({navigation}) => {
            let {state} = navigation;
            let {routes,index} = state;
            let titles = ['首页', '附近', '订单', '我的'];
            initStatusBarStyle(navigation);
            return {
                title: titles[index],
                headerStyle: {
                    backgroundColor: '#91e9f7'
                }
            }
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: Color.theme,
            inactiveTintColor: '#979797',
            style: {backgroundColor: '#ffffff'},
        }
    }
)

function initStatusBarStyle(navigation) {
    let {state} = navigation;
    let {routes,index} = state;
    let lightContentScenes = ['Home', 'Mine']
    let currentRouteName = routes[index].routeName;
    StatusBar.setBarStyle(lightContentScenes.indexOf(currentRouteName) > -1 ? 'light-content': 'dark-content')
}
