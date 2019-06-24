import React, {Component} from 'react'
import {
    DeviceEventEmitter
} from 'react-native'

export const THEME_NOTICE = {
    THEME_CHNAGE: "THEME_CHNAGE"
};

export default class LSCBaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: ''
        }
    }

    componentDidMount() {
        this.baseListener = DeviceEventEmitter.addListener(THEME_NOTICE, (action, params) => {
            this.onBaseAction(action, params);
        })
    }

    onBaseAction(action, params) {
        if (action === THEME_NOTICE.THEME_CHNAGE) {
            this.onThemeChange(params)
        }
    }

    componentWillUnmount() {
        if (this.baseListener) {
            this.baseListener.remove();
        }
    }

    onThemeChange(theme) {

    }
}
