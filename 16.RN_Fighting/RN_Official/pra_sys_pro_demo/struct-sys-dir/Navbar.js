import {createStackNavigator} from 'react-navigation'
import ModalPage from './modal/Modal'

import {TabBar} from './TabBar'

export const MainStack = createStackNavigator(
    {
        Main: {
            screen: TabBar
        },
    },
)

export const ModalStack = createStackNavigator(
    {
        Main: {
            screen: MainStack
        },
        Modal: {
            screen: ModalPage
        }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)
