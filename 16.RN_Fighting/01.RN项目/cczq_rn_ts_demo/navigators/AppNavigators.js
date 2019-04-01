/**
 * Created by yangli on 2019/3/31.
 */

import HomePage from './../pages/HomePage'
import Page1 from './../pages/Page1'
import Page2 from './../pages/Page2'
import Page3 from './../pages/Page3'
import Page4 from './../pages/Page4'
import Page5 from './../pages/Page5'

import {StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator,DrawerItems} from 'react-navigation'
import React from 'react'
import {Button, Platform, View, ScrollView, SafeAreaView} from 'react-native'

// import Icon from 'react-native-vector-icons/Ionicons'

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
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: "Page1",
                tabBarIcon: ({tintColor, focused})=> {
                    <Icon
                        name={"md-home"}
                        size={26}
                        style={{color: tintColor}}
                    />
                }
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: "Page2",
                tabBarIcon: ({tintColor, focused})=> {
                    <Icon
                        name="md-home"
                        size={26}
                        style={{color: tintColor}}
                    />
                }
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: "Page3",
                tabBarIcon: ({tintColor, focused})=> {
                    <Icon
                        name="md-home"
                        size={26}
                        style={{color: tintColor}}
                    />
                }
            }
        }
    },
    {
        tabBarComponent: TabBarComponent,
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? 'purple' : '#fff'
        }
    }
)

export const AppStackNavigator = StackNavigator({
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                headerBackTitle: '返回'
            }
        },
        Page1: {
            screen: Page1,
            navigationOptions: ({navigation})=> {
                return {
                    title: `${navigation.state.params.name}页面名`
                }
            }
        },
        Page2: {
            screen: Page2,
        },
        Page3: {
            screen: Page3,
            navigationOptions: (props)=> {
                const {navigation} = props;
                const {state, setParams} = navigation;
                const {params} = state;
                return {
                    title: params.title ? params.title : 'this is Page3',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerRight: (
                        <Button
                            title={params.mode === 'edit' ? "保存" : "编辑"}
                            onPress={()=> {
                                setParams({
                                    mode: params.mode === 'edit' ? '' : 'edit'
                                })
                            }}
                        />
                    )
                }
            }
        },
        TabNav: {
            screen: AppTabNavigator,
            navigationOptions: {
                title: 'this is TabNav',
                leftButton: null
            }
        },
        DrawerNav: {
            screen: DrawerNav,
            navigationOptions: {
                title: 'this is DrawerNav'
            }
        }
    },
    {
        // 全局的设置
        // navigationOptions: {
        //     // header: null
        // }
        navigationOptions: (options)=> {
            return {
                headerStyle: {
                    backgroundColor: '#456'
                }
            }
        }
    }
)