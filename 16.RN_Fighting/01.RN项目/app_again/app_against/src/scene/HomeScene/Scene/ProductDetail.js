import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import {WebView} from 'react-native-webview'
import NavigationBar from './../../../widget/NavigationBar'
import FavorateHelper, {FAVORITE_SCHEME} from './../../../utils/FavorateHelper'

export default class ProductDetail extends Component {
    static navigationOptions = ({navigation}) => {
        let favorateHelper = new FavorateHelper(FAVORITE_SCHEME.MAIN)
        let {setParams} = navigation;
        let {params} = navigation.state;
        let {model,backEvent, originalFavorite} = params;
        let {item, isFavorite} = model;
        return {
            title: item.name,
            headerLeft: NavigationBar.getBackButton(() => {
                navigation.goBack();
                originalFavorite === isFavorite? false : backEvent();
            }),
            headerRight: NavigationBar.getRightFavoriteButton(NavigationBar.getImgSource(isFavorite), () => {
                let temp = model;
                temp.isFavorite = !temp.isFavorite;
                setParams({
                    model: temp
                })
                // 改变本地存储情况
                if (temp.isFavorite) {
                    favorateHelper.saveMainListItem(item.id.toString(), item)
                } else {
                    favorateHelper.removeMainListItem(item.id.toString())
                }
            })
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        let {params} = this.props.navigation.state;
        let {model} = params;
        let {item} = model;
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: item.html_url}}
                    startInLoadingState={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
