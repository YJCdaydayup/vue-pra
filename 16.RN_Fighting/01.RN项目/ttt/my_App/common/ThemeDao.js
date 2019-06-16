/**
 * Created by yangli on 2019/6/16.
 */

import React from 'react'
import ThemeFactory, {ThemeFlags} from './../res/styles/ThemeFactory'

export const THEME_KEY = 'THEME_KEY'

import {
    AsyncStorage
} from 'react-native'

export default class ThemeDao {
    /**
     * 保存主题标识
     */
    save(themeFlag) {
        AsyncStorage.setItem(THEME_KEY, themeFlag, (err)=> {

        })
    }

    /**
     * 获取当前主题
     * @returns {Promise}
     */
    getTheme() {
        return new Promise((resolve,reject)=>{
            AsyncStorage.getItem(THEME_KEY, (err, result)=> {
                if (err) {
                    reject(err);
                    return;
                }
                if (!result) {
                    this.save(ThemeFlags.Default);
                    result = ThemeFlags.Default;
                }
                resolve(ThemeFactory.createTheme(result));
            })
        })
    }

}

