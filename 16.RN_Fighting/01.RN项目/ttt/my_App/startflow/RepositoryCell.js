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
        clickEvent: PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    render() {

        let {rowData} = this.props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={()=>{
                    this.props.navigation.navigate('AsyncLocal')
                }}
            >
                <View style={styles.cell_container}>
                    <Text style={styles.title}>{rowData.full_name}</Text>
                    <Text style={styles.description}>{rowData.description}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                            <Text>Author:</Text>
                            <Image
                                source={{uri: rowData.owner.avatar_url}}
                                style={{height: 22, width: 22}}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>Stars:</Text>
                            <Text style={{color: 'red'}}>{rowData.stargazers_count}</Text>
                        </View>
                        <Image
                            source={require('./../res/images/ic_star.png')}
                            style={{width: 22, height: 22, marginRight: 10}}
                        />
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