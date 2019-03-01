import {createBottomTabNavigator, createAppContainer} from 'react-navigation'

import Other from './../page/OtherPage'
import Detail from './../page/DetailScreen'
import {MainStack,RootStack} from './../navigations/Navigation'

export const TabNavigation = createBottomTabNavigator(
    {
        RootStack,
        Other
    },
    {
        defaultNavigationOptions: ((options) => {
            return {
                tabBarOptions: {
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                }
            }
        })
    }
);