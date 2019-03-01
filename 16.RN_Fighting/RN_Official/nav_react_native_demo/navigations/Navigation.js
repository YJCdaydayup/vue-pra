import {createStackNavigator} from "react-navigation";
import HomePage from './../page/HomePage'
import DetailPage from './../page/DetailScreen'
import Modal from './../page/ModalPage'
import React from 'react'

import LeftButton from './../NavHeaderComponent/LeftButton'

export const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomePage
        },
        Detail: {
            screen: DetailPage
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ((options)=>{
            return {
                headerStyle: {
                    backgroundColor: '#f3f4f5'
                },
                headerTintColor: 'blue',
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: 'bold'
                },
                headerLeft: <LeftButton navigation={options.navigation}/>
            }
        })
    }
);

export const RootStack = createStackNavigator(
    {
        Mains: {
            screen: MainStack,
        },
        MyModal: {
            screen: Modal,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);