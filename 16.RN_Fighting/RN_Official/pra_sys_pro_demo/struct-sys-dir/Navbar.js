import {createStackNavigator} from 'react-navigation'
import VideoPlayer from './../struct-sys-dir/list_modules/VideoPlayer'
import ModalPage from './modal/Modal'

import {TabBar} from './TabBar'

export const MainStack = createStackNavigator(
    {
        Main: {
            screen: TabBar
        },

        // 导航跳转放在上面
        VideoPlayer: {
            screen: VideoPlayer
        }
    },
)

export const ModalStack = createStackNavigator(
    {
        Main: {
            screen: MainStack
        },

        // 模态放在下面
        Modal: {
            screen: ModalPage
        }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)
