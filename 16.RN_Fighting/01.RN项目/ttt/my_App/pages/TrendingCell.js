/**
 * Created by yangli on 2019/4/7.
 */
import React, {Component, PropTypes} from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native'

import HtmlView from 'react-native-htmlview'

export default class TrendingCell extends Component {

    static propTypes = {
        clickEvent: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            isFavorate: this.props.model.isFavorate
        }
    }

    render() {
        let {model, clickEvent, onFavorate} = this.props;
        let {item} = model;
        let description = '<p>' + item.description + '</p>';
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={()=> {
                    clickEvent(model, this.state.isFavorate)
                }}
            >
                <View style={styles.cell_container}>
                    <Text style={styles.title}>{item.fullName}</Text>
                    <HtmlView
                        value={description}
                        onLinkPress={(url)=> {
                        }}
                        stylesheet={{
                            p: styles.description,
                            a: {color: 'red'}
                        }}
                    />
                    <Text style={styles.description}>{item.meta}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                            <Text style={[styles.description, {marginRight: 10}]}>Build by:</Text>
                            {item.contributors.map((item, index, arr)=> {
                                return <Image
                                    key={index}
                                    source={{uri: item}}
                                    style={{height: 22, width: 22}}
                                />
                            })}
                        </View>
                        <TouchableOpacity
                            onPress={()=> {
                                this.setState({
                                    isFavorate: !this.state.isFavorate
                                }, () => {
                                    onFavorate(model, this.state.isFavorate)
                                })
                            }}
                        >
                            <Image
                                source={this.state.isFavorate? require('./../res/images/ic_star.png'): require('./../res/images/ic_unstar_transparent.png')}
                                style={{width: 22, height: 22, marginRight: 10}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#212121'
    },
    description: {
        fontSize: 14,
        marginBottom: 5,
        color: '#757575',
        borderRadius: 2
    },
    cell_container: {
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 3,
        borderWidth: 1,
        shadowColor: 'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        borderColor: '#ddd',
        elevation: 2
    }
})