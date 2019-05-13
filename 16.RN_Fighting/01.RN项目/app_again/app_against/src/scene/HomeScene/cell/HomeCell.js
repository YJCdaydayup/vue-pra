import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'

import PropTypes from 'prop-types'

export default class HomeCell extends Component {

    static propTypes = {
        homeModel: PropTypes.object.isRequired,
        callback: PropTypes.func,
        onFavorite: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.state = {
            isFavorate: this.props.homeModel.isFavorite
        }
    }

    render() {
        let {callback, homeModel,onFavorite} = this.props;
        let {item} = homeModel;
        let {owner} = item;
        let {avatar_url} = owner;
        let favoImgSource = this.state.isFavorate? require('./../../../img/ic_star.png'): require('./../../../img/ic_unstar_transparent.png');
        return (
            <TouchableOpacity
                onPress={() => {
                    callback ? callback(homeModel) : null;
                }}
            >
                <View style={styles.container}>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            marginHorizontal: 10
                        }}
                        source={{uri: avatar_url}}
                    />
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.updateState({
                                isFavorate: !this.state.isFavorate
                            },()=>{
                                onFavorite(this.state.isFavorate, item);
                            })
                        }}
                    >
                        <Image
                            style={styles.favorate}
                            source={favoImgSource}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

    updateState(dic, callback) {
        if (!this) return;
        this.setState(dic, callback);
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginHorizontal: 10,
        paddingBottom: 20,
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgba(29,29,29,0.2)',
        flexDirection: 'row'
    },
    info: {
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 5
    },
    favorate: {
        width: 20,
        height: 20,
        marginRight: 10
    }
})
