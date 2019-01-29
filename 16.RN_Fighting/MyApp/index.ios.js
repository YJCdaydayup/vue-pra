/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';


export default class Test2 extends Component {
  render() {
    return (
        <View></View>
    )
  }
}

const styles = StyleSheet.create({

});

// flex布局练习
// export default class Test1 extends Component {
//   render() {
//     return (
//         <View style={myStyle.container}>
//           <Text style={{backgroundColor: 'red'}}>No. one</Text>
//           <Text style={{backgroundColor: 'green', height: 40}}>NO. two</Text>
//           <Text style={{backgroundColor: 'blue', height: 50}}>NO. three</Text>
//           <Text style={{backgroundColor: 'yellow', height: 60}}>NO. four</Text>
//         </View>
//     );
//   }
// }

// const myStyle = StyleSheet.create({
//   container: {
//     // flex: 1,
//     marginTop: 44,
//     backgroundColor: 'gray',
//     flexDirection: 'row',
//     // 主轴的对齐方式
//     // justifyContent: 'flex-start'// 对齐主站的起点位置
//     // justifyContent: 'flex-end' // 顺序没变，对齐主轴的终点位置
//     // justifyContent: 'space-between' // 空格平分,两端对齐
//     // justifyContent: 'space-around', // 平均分配，两端有间距
//
//     justifyContent: 'center', // 集体主轴方向集中居中
//     // 设置侧轴,默认是stretch，如果没有设置高度，或高度为auto，子控件拉伸占满父空间
//     // alignItems: 'center'
//
//   },
// });

// 注册一个组件
// export default class MyApp extends Component {
//   // 初始化方法，相当于viewDidiLoad方法，返回就是具体显示的内容
//   render() {
//     return (
//         // 这个View就是控制器的根View，只能有一个,布局特点类似于div
//         <View style={myStyle.container}>
//           <Text style={{textAlign:'center'}}>abc</Text>
//           <View style={myStyle.innerViewStyle}>
//             <Text>我是里面的View</Text>
//           </View>
//           <View style={myStyle.nextViewStyle}>
//             <Text>我是里面的View</Text>
//           </View>
//         </View>
//     );
//   }
// }

// 输出到iOS App里面
AppRegistry.registerComponent('MyApp', () => Test2);
