import HomePage from './HomePage'
import FindPage from './../FindNavigation/FindPage'
import NewsPage from './../NewsNavigation/NewsPage'
import MinePage from './../MineNavigation/MinePage'

import {createStackNavigator, createAppContainer} from 'react-navigation'

export const HomeStackNavigation = createStackNavigator(
    {
        Home: {
            screen: HomePage,
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ((options) => {
            return {
                headerStyle: {
                    backgroundColor: 'red'
                }
            }
        })
    }
)

export const HomeContainer = createAppContainer(HomeStackNavigation);

