
import React from 'react'

import {createDrawerNavigator} from 'react-navigation'

import Page1 from './../pages/Page1'
import Page2 from './../pages/Page2'
import Page3 from './../pages/Page3'

import Icon from 'react-native-vector-icons/Ionicons'

export const DrawerStack = createDrawerNavigator(
    {
        Page1: {
            screen: Page1,
            navigationOptions: {
                drawerLabel: 'Page1',
                drawerIcon: ({tintColor}) => {
                    return (
                        <Icon
                            name="ios-today"
                            size={20}
                            color={tintColor}
                        />
                    )
                }
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                drawerLabel: 'Page2',
                drawerIcon: ({tintColor}) => {
                    return (
                        <Icon
                            name="ios-add-circle"
                            size={20}
                            color={tintColor}
                        />
                    )
                }
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                drawerLabel: 'Page3',
                drawerIcon: ({tintColor}) => {
                    return (
                        <Icon
                            name="ios-add-circle"
                            size={20}
                            color={tintColor}
                        />
                    )
                }
            }
        }
    }
)


