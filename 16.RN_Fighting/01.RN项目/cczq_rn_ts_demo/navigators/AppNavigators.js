/**
 * Created by yangli on 2019/3/31.
 */

import HomePage from './../pages/HomePage'
import Page1 from './../pages/Page1'
import Page2 from './../pages/Page2'
import Page3 from './../pages/Page3'
import Page4 from './../pages/Page4'
import Page5 from './../pages/Page5'
import Page6 from './../components/SwipableFlatlist'
import SectionList from './../components/SectionList'

import AsyncLocalStorage from '../startflow/AsyncStoragePage'
import MyPage from './../startflow/Mine/MyPage'
import AutoLabel from './../startflow/Mine/AutoTabel'

import ViewUtil from './../common/ViewUtil'

import WelcomePage from './../startflow/WelcomePage'

import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    DrawerNavigator,
    DrawerItems,
    SwitchNavigator
} from 'react-navigation'
import React from 'react'
import {Button, Platform, View, ScrollView, SafeAreaView} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }
    }

    render() {
        const {routes, index} = this.props.navigationState;
        const {theme} = routes[index].params;
        if (theme && theme.updateTime > this.theme.updateTime) {
            this.theme = theme;
        }
        return (
            <TabBarBottom
                {...this.props}
                activeTintColor={this.theme.tintColor || this.props.activeTintColor}
            />
        )
    }
}

export const DrawerNav = DrawerNavigator({
        Page4: {
            screen: Page4,
            navigationOptions: {
                drawerLabel: 'Page4',
                drawerIcon: ({tintColor})=> {
                    return (
                        <View
                            style={{
                                backgroundColor: 'red',
                                width: 20,
                                height: 20
                            }}
                        />
                    )
                }
            }
        },
        Page5: {
            screen: Page5,
            navigationOptions: {
                drawerLabel: 'Page5',
                drawerIcon: ({tintColor})=> {
                    return (
                        <View
                            style={{
                                backgroundColor: 'blue',
                                width: 20,
                                height: 20
                            }}
                        />
                    )
                }
            }
        }
    }, {
        initialRouteName: 'Page5',
        contentOptions: {
            activeTintColor: 'yellow'
        },
        // contentComponent: (props)=>{
        //    return (
        //        <ScrollView
        //            style={{
        //                backgroundColor: '#987666',
        //                flex: 1
        //            }}
        //        >
        //            <SafeAreaView
        //                forceInset={{
        //                    top: 'always',
        //                    horizontal: 'never'
        //                }}
        //            >
        //                <DrawerItems
        //                    {...props}
        //                />
        //            </SafeAreaView>
        //        </ScrollView>
        //    )
        // }
    }
)

export const AppTabNavigator = TabNavigator(
    {
        WelcomePage: {
            screen: WelcomePage,
            navigationOptions: {
                tabBarLabel: "Page1",
                // tabBarIcon: ({tintColor, focused})=> {
                //     return <Icon
                //         name={"md-home"}
                //         size={26}
                //         style={{color: tintColor}}
                //     />
                // }
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: "Page2",
                // tabBarIcon: ({tintColor, focused})=> {
                //    return  <Icon
                //         name="rocket"
                //         size={26}
                //         style={{color: tintColor}}
                //     />
                // }
            }
        },
        MyPage: {
            screen: MyPage,
            navigationOptions: {
                tabBarLabel: "我的",
                // tabBarIcon: ({tintColor, focused})=> {
                //     return <Icon
                //         name="md-home"
                //         size={26}
                //         style={{color: tintColor}}
                //     />
                // }
            }
        }
    },
    {
        // tabBarComponent: TabBarComponent,
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#2196F3' : '#fff',
            titleColor: '#2196F3'
        },
        navigationOptions: ({navigation})=>{
            let {state} = navigation;
            let {key} =state;
            return {
                title: key
            }
        }
    }
)

export const AppStackNavigator = StackNavigator({
        // SectionList: {
        //     screen: SectionList
        // },
        // HomePage: {
        //     screen: HomePage,
        //     navigationOptions: {
        //         headerBackTitle: '返回',
        //     }
        // },
        // Page1: {
        //     screen: Page1,
        //     navigationOptions: ({navigation})=> {
        //         return {
        //             // title: `${navigation.state.params.name}页面名`
        //         }
        //     }
        // },
        // Page2: {
        //     screen: Page2,
        // },
        // Page3: {
        //     screen: Page3,
        //     navigationOptions: (props)=> {
        //         const {navigation} = props;
        //         const {state, setParams} = navigation;
        //         const {params} = state;
        //         return {
        //             title: params.title ? params.title : 'this is Page3',
        //             headerTitleStyle: {
        //                 color: '#fff'
        //             },
        //             headerRight: (
        //                 <Button
        //                     title={params.mode === 'edit' ? "保存" : "编辑"}
        //                     onPress={()=> {
        //                         setParams({
        //                             mode: params.mode === 'edit' ? '' : 'edit'
        //                         })
        //                     }}
        //                 />
        //             )
        //         }
        //     }
        // },
        TabNav: {
            screen: AppTabNavigator,
            navigationOptions: {
                // title: '最新',
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center',
                    fontWeight: 'normal',
                    fontSize: 20,
                    color: '#fff'
                },
            }
        },
        AsyncLocal: {
            screen: AsyncLocalStorage,
            navigationOptions: {
                title: 'AsyncLocalStorage',
                headerLeft:ViewUtil.getLeftButton(()=>{

                })
            }
        },
        AutoLabel: {
            screen: AutoLabel,
            navigationOptions: ({navigation})=>{
                return {
                    title: '自定义标签',
                    headerLeft:ViewUtil.getLeftButton(()=>{
                        navigation.goBack()
                    })
                }
            }
        }
        // DrawerNav: {
        //     screen: DrawerNav,
        //     navigationOptions: {
        //         title: 'this is DrawerNav'
        //     }
        // }
    },
    {
        // 全局的设置
        // navigationOptions: {
        //     // header: null
        // }
        navigationOptions: (options)=> {
            return {
                headerStyle: {
                    backgroundColor: '#2196F3'
                },
                headerTitleColor: '#fff',
            }
        }
    }
)

export const SwitchNav = SwitchNavigator(
    {
        TabNav: {
            screen: AppStackNavigator,
            navigationOptions: {
                title: 'this is TabNav',
                leftButton: null
            }
        }
    },
    {
        initialRouteName: 'TabNav',
    }
    )
    ;
