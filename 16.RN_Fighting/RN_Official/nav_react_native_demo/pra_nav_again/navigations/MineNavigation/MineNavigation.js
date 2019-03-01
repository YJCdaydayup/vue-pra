import MinePage from './MinePage'

import {createStackNavigator, createAppContainer} from 'react-navigation'

export const MineStackNavigation = createStackNavigator({
        Mine: {
            screen: MinePage
        }
    },
    {
        initialRouteName: 'Mine',
        defaultNavigationOptions: ((options) => {
            return {
                headerStyle: {
                    backgroundColor: 'red'
                }
            }
        })
    })

export const MineContainer = createAppContainer(MineStackNavigation);

