/**
 * Created by yangli on 2019/2/27.
 */

import {PixelRatio} from 'react-native'

export default class HKTabBar extends Component {
    static propTypes = {
        goToPage: React.PropTypes.func, // 跳转到tab的方法
        activeTab: React.PropTypes.number, // 选中的下标
        tabs: React.PropTypes.array, // tab的集合

        // 自定义属性
        tabNames: React.PropTypes.array, // 名称数组
        tabIconNames: React.PropTypes.array, // Item图片名称的集合
        tabIconSelctedNames: React.PropTypes.array // 选中图片集合
    }

    render() {
        return (
            <View style={styles.tabsStyle}>
                {this.props.tabs.map((tab, i)=> {
                    return this.renderItem(tab, i)
                })}
            </View>
        )
    }

    // 1.
    renderItem(tab, i) {

        // 判断i是否是当前是不是选中的
       let color = this.props.activeTab == i? 'orange': 'black';
        let currentImgs = this.props.activeTab == i?this.props.tabIconSelctedNames:this.props.tabIconNames;

        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={()=>{
                    // 重新渲染
                    this.props.goToPage(i)
                }}
                key={i}
            >
                <View style={styles.tabItem}>
                    {/*拿到当前设备的缩放标准*/}
                    <Image
                        source={{uri: this.props.tabIconNames[i],scale: PixelRatio.get()}}
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                    <Text
                        style={{color: color}}
                    >{this.props.tabNames[i]}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({})