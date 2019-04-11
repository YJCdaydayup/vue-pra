import React from 'react'
import {
    Button
} from 'react-native'

import {createStackNavigator} from 'react-navigation'

import HomePage from './../pages/HomePage'
import Page1 from './../pages/Page1'
import Page2 from './../pages/Page2'

import {TabBar} from './../tabbar/tabbar'
import {DrawerStack} from './../drawer/drawer'

import ViewUtils from './../common/ViewUtils'

export const AppStackNavigator = createStackNavigator(
    {
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                title: 'HOME',
            }
        },
        Page1: {
            screen: Page1,
            navigationOptions: ({navigation})=>{
                let {state,setParams} = navigation;
                let {params} = state;
                return {
                    title: params.title?`参数: ${params.title}`:"默认标题",
                    headerStyle: {
                        backgroundColor: '#aaa'
                    }
                }
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: ({navigation})=>{
                let {state,setParams} = navigation;
                let {params} = state;
                return {
                    headerRight: (
                            <Button
                                title={params.mode === 'edit'? '完成':'编辑'}
                                onPress={()=>{
                                    setParams({
                                        mode: params.mode === 'edit'? '': 'edit'
                                    })
                                }}
                            />
                        )

                }
            }
        },
        TabBar: {
            screen: TabBar,
            navigationOptions: {
                title: 'Tabbar'
            }
        },
        DrawerStack: {
            screen: DrawerStack,
            navigationOptions: {
                title: 'Drawer'
            }
        }
    },
    {
        navigationOptions: ({navigation}) => {
            return {
                headerStyle: {
                    backgroundColor : 'red', // 定制所有导航栏的颜色
                }
            }
        }
    }
)
