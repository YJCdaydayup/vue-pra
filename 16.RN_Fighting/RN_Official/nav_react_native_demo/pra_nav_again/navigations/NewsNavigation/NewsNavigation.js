import NewsPage from './NewsPage'

import {createStackNavigator, createAppContainer} from 'react-navigation'

export const NewsStackNavigation = createStackNavigator({
        News: {
            screen: NewsPage
        }
    },
    {
        initialRouteName: 'News',
        defaultNavigationOptions: ((options) => {
            return {
                headerStyle: {
                    backgroundColor: 'red'
                }
            }
        })
    })

export const NewsContainer = createAppContainer(NewsStackNavigation);

