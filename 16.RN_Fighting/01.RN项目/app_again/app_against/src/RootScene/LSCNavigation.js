import {createStackNavigator} from 'react-navigation'
import {AppBottomTabNavigator} from './LSCTabNavigator'

import ProductDetail from './../scene/HomeScene/Scene/ProductDetail'
import NavigationBar from './../widget/NavigationBar'

export const AppStackNavigator = createStackNavigator(
    {
        AppTabbarNavigator: {
            screen: AppBottomTabNavigator,
        },
        ProductDetail: {
            screen: ProductDetail
        }
    },
    {
        navigationOptions: ({navigation}) => {
            return {
                headerStyle: {
                    backgroundColor: 'red', // 定制所有导航栏的颜色
                }
            }
        }
    }
)
