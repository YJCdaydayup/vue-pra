

import {createStackNavigator} from 'react-navigation'

import HomePage from './../pages/HomePage'

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        Screen: HomePage
    }
})