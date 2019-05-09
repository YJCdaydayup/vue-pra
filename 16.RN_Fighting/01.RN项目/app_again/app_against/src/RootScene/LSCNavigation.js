import {createStackNavigator} from 'react-navigation'
import {AppBottomTabNavigator} from './LSCTabNavigator'

export const AppStachNavigator = createStackNavigator(
    {
        AppTabbarNavigator: {
            screen: AppBottomTabNavigator,
        }
    },
    {
        navigationOptions: ()=>{
            return {
                headerStyle: {
                    backgroundColor: 'red'
                }
            }
        },
    }
)
