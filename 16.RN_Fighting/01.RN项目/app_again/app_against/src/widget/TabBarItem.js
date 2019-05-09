import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

export default class TabBarItem extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        tintColor: PropTypes.string.isRequired
    }

    render() {
        // 设置当item选中时要展示的图片,如果图片库中有被选中的图片,则用选中的图片,否则可以把普通图片赋值给它
        return (
            <Icon name={this.props.name} size={24} color={this.props.tintColor} />
        )
    }
}
