import React from 'react'
import {
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native'


import ThemeFactory from './../common/ThemeFactory'
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
                    if (focused) {
                        ThemeFactory.getLocalTheme().then((res) => {
                            return <TabBarItem name="home" tintColor={res.themeColor}/>
                        });
                    }
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
                },
                headerStyle: {
                    backgroundColor: 'red',
                }
            }
        }
    },
    {
        navigationOptions: ({navigation}) => {
            let {state} = navigation;
            let {routes, index} = state;
            let titles = ['首页', '附近', '订单', '我的'];
            let {setParams} = navigation;
            setParams({param1: true})
            console.log(state.params)
            initStatusBarStyle(navigation);
            if (index === 3 || index === 1) {
                return {
                    header: null
                }
            } else if (index === 0) {
                return {
                    ...getNavCommonStyle(titles[index]),
                    headerRight: getPoperButton(setParams)
                }
            } else {
                return getNavCommonStyle(titles[index])
            }
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: 'purple',
            inactiveTintColor: 'black',
            style: {backgroundColor: '#ffffff'},
        }
    }
)

getPoperButton = (setParams) => {

    return <TouchableOpacity
    >
        <Text style={{
            marginRight: 20,
            fontSize: 16,
        }}>列表</Text>
    </TouchableOpacity>
}

getNavCommonStyle = (title) => {
    return {
        title: title,
        headerTitleStyle: {
            color: 'gray'
        },
        headerStyle: {
            backgroundColor: '#91e9f7',
        }
    }
}

initStatusBarStyle = (navigation) => {
    let {state} = navigation;
    let {routes, index} = state;
    let lightContentScenes = ['Home', 'Mine']
    let currentRouteName = routes[index].routeName;
    StatusBar.setBarStyle(lightContentScenes.indexOf(currentRouteName) > -1 ? 'light-content' : 'dark-content')
}
