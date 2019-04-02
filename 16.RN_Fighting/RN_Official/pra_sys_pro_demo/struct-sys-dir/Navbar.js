import {createStackNavigator} from 'react-navigation'
import VideoPlayer from './../struct-sys-dir/list_modules/VideoPlayer'
import ModalPage from './modal/Modal'
import ListPage from './page/List'

import {TabBar} from './TabBar'

import React from 'react'
import {Text} from 'react-native'

export const MainStack = createStackNavigator(
    {
        List: {
            screen: ListPage
        },
        Main: {
            screen: TabBar
        },

        // 导航跳转放在上面
        VideoPlayer: {
            screen: VideoPlayer
        },
    }
)

export const ModalStack = createStackNavigator(
    {
        // 模态放在下面
        Modal: {
            screen: ModalPage,
            navigationOptions: {
                header: null,
                headerBackTitle: null,
                headerBackImage: null,
            }
        },
        Main: {
            screen: MainStack
        },
        TabBar: {
            screen: TabBar,
            navigationOptions: {
                headerBackImage: ()=>{
                    return (
                        <Text
                            onPress={()=>{
                                alert('1234')
                            }}
                        />
                    )
                }
            }
        }
    },
    {
        mode: 'modal',
        // headerMode: 'none'
    }
)
