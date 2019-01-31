/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class Test3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text numberOfLines={3} style={styles.textStyle}>我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！我是文字！</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        backgroundColor: 'red',
        textAlign: 'center',
        // height: 150,
        // lineHeight: 150
        // textAlignVertical: 'center'  只适合安卓，不适合iOS
        paddingTop: 75,
        paddingBottom: 75
    }
});


// export default class Test3 extends Component {
//     render() {
//         return (
//             <View style={styles2.container}>
//                 <Text style={{backgroundColor: 'red',height: 60,flex: 5,
//                     alignSelf: 'center'
//                 }}>No. one</Text>
//                 <Text style={{backgroundColor: 'orange',height: 70,flex: 2}}>NO. two</Text>
//                 <Text style={{backgroundColor: 'green', height: 80,flex: 2}}>NO. two</Text>
//                 <Text style={{backgroundColor: 'blue',height: 90,flex: 1}}>NO. three</Text>
//             </View>
//         )
//     }
// }

// const styles2 = StyleSheet.create({
//     container: {
//         backgroundColor: 'purple',
//         marginTop: 64,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'center'
//     }
// })

// export class Test2 extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={{backgroundColor: 'red', width: 200}}>No. one</Text>
//                 <Text style={{backgroundColor: 'orange', width: 50}}>NO. two</Text>
//                 <Text style={{backgroundColor: 'green', width: 80}}>NO. two</Text>
//                 <Text style={{backgroundColor: 'blue', width: 50}}>NO. three</Text>
//                 <Text style={{backgroundColor: 'yellow', width: 60}}>NO. four</Text>
//             </View>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'purple',
//         flex: 1,
//         marginTop: 25,
//         flexDirection: 'row',
//         // justifyContent: 'space-around',
//         alignItems: 'center',
//         flexWrap: 'wrap'
//     }
// });
//
//
// // export default class Test1 extends Component {
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
AppRegistry.registerComponent('MyApp', () => Test3);
