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


export default class RepositoryCell extends Component {

    static propTypes = {
        clickEvent: PropTypes.func,
        onFavorate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            favoriate: this.props.projectModel.isFavorate
        }
    }

    render() {

        let {projectModel, clickEvent} = this.props;
        let rowData = projectModel.item;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={()=> {
                    clickEvent(rowData)
                }}
            >
                <View style={styles.cell_container}>
                    <Text style={styles.title}>{rowData.name}</Text>
                    <Text style={styles.description}>{rowData.description}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                            <Text>Author:</Text>
                            <Image
                                source={{uri: rowData.avatar_url}}
                                style={{height: 22, width: 22}}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>Stars:</Text>
                            <Text style={{color: 'red'}}>{rowData.stargazers_count}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={()=> {
                                this.onPressFavorite()
                            }}
                        >
                            <Image
                                source={!this.state.favoriate ? require('./../res/images/ic_unstar_transparent.png') : require('./../res/images/ic_star.png')}
                                style={{
                                    width: 22,
                                    height: 22,
                                    padding: 10
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    onPressFavorite() {
        this.setFavorateState(!this.state.favoriate)
    }

    setFavorateState(isFavorate) {
        if (!this) return;
        this.setState({
            favoriate: isFavorate
        }, () => {
            this.props.onFavorate(this.props.projectModel,isFavorate)
        })
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