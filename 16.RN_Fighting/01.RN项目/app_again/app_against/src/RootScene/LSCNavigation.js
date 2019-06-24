import {createStackNavigator} from 'react-navigation'
import {AppBottomTabNavigator} from './LSCTabNavigator'

import ProductDetail from './../scene/HomeScene/Scene/ProductDetail'
import NavigationBar from './../widget/NavigationBar'
import MyFavorite from './../scene/MineScene/subscene/MyFavoritePage'
import ThemePage from './../scene/MineScene/subscene/ThemePage'

export const AppStackNavigator = createStackNavigator(
    {
        AppTabbarNavigator: {
            screen: AppBottomTabNavigator,
        },
        ProductDetail: {
            screen: ProductDetail
        },
        MyFavorite: {
            screen: MyFavorite,
            navigationOptions: ({navigation})=>{
                return {
                    headerLeft: NavigationBar.getBackButton(() => {
                        navigation.goBack();
                    }),
                }
            }
        },
        ThemePage: {
            screen: ThemePage,
            navigationOptions: ({navigation})=>{
                return {
                    headerLeft: NavigationBar.getBackButton(() => {
                        navigation.goBack();
                    }),
                }
            }
        }
    },
    {
        navigationOptions: ({navigation}) => {
            return {
                headerStyle: {
                    backgroundColor: 'red', // 定制所有导航栏的颜色
                }
            }
        },
        initialRouteParams: {title: 'Net'},
    }
)
