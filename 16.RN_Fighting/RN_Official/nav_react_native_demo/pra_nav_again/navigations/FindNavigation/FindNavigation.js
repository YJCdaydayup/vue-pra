import FindPage from './FindPage'

import {createStackNavigator, createAppContainer} from 'react-navigation'

 FindStackNavigation = createStackNavigator(
    {
        Find: {
            screen: FindPage
        }
    },
    {
        initialRouteName: 'Find',
        defaultNavigationOptions: ((options)=>{
            return {
                headerStyle: {
                    backgroundColor: 'red'
                }
            }
        })
    }
)

export const FindContainer = createAppContainer(FindStackNavigation);