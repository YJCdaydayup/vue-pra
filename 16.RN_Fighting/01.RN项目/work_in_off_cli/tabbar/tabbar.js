import React from 'react'
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation'

import Page1 from './../pages/Page1'
import Page2 from './../pages/Page2'
import Page3 from './../pages/Page3'

import Icon from 'react-native-vector-icons/FontAwesome'

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
            <BottomTabBar
                {...this.props}
                activeTintColor={this.theme.tintColor || this.props.activeTintColor}
            />
        )
    }
}

export const TabBar = createBottomTabNavigator(
    {
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: "home",
                tabBarIcon: ({tintColor, focused}) => {
                    return <Icon
                        name="home"
                        size={26}
                        style={{color: tintColor}}
                    />
                }
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: "recording",
                tabBarIcon: ({tintColor, focused}) => {
                    return <Icon
                        name="beer"
                        size={26}
                        style={{color: tintColor}}
                    />
                }
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: "rocket",
                tabBarIcon: ({tintColor, focused}) => {
                    return <Icon
                        name="rocket"
                        size={26}
                        style={{color: tintColor}}
                    />
                }
            }
        }
    },
    {
        navigationOptions: ({navigation})=>{
            let index = navigation.state;
            console.log(navigation.state)
            return {

            }
        },
        tabBarOptions: {
                //当前选中的tab bar的文本颜色和图标颜色
                activeTintColor: 'green',
                //当前未选中的tab bar的文本颜色和图标颜色
                inactiveTintColor: '#000',
                //是否显示tab bar的图标，默认是false
                showIcon: true,
                //showLabel - 是否显示tab bar的文本，默认是true
                showLabel: true,
                //是否将文本转换为大小，默认是true
                upperCaseLabel: false,
                //material design中的波纹颜色(仅支持Android >= 5.0)
                pressColor: '#788493',
                //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
                pressOpacity: 0.1,
                //tab bar的样式
                style: {
                    backgroundColor: '#fff',
                    paddingBottom: 1,
                    borderTopWidth: 0.2,
                    paddingTop:1,
                    borderTopColor: '#ccc',
                    height: 46
                },
                //tab bar的文本样式
                labelStyle: {
                    fontSize: 11,
                    margin: 1
                },
                //tab 页指示符的样式 (tab页下面的一条线).
                indicatorStyle: {height: 0},
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否在切换tab页时使用动画
        animationEnabled: false,
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
    }
)
