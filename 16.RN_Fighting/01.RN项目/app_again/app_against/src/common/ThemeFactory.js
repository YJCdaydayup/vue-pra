/**
 * 主题
 * @flow
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    AsyncStorage
} from 'react-native';

export const ThemeFlags = {
    Default: '#2196F3',
    Red: '#F44336',
    Pink: '#E91E63',
    Purple: '#9C27B0',
    DeepPurple: '#673AB7',
    Indigo: '#3F51B5',
    Blue: '#2196F3',
    LightBlue: '#03A9F4',
    Cyan: '#00BCD4',
    Teal: '#009688',
    Green: '#4CAF50',
    LightGreen: '#8BC34A',
    Lime: '#CDDC39',
    Yellow: '#FFEB3B',
    Amber: '#FFC107',
    Orange: '#FF9800',
    DeepOrange: '#FF5722',
    Brown: '#795548',
    Grey: '#9E9E9E',
    BlueGrey: '#607D8B',
    Black: '#000000'
}

const THEME_FLAG = "THEME_FLAG";
import CommonLogical from "./CommonLogical";

export default class ThemeFactory {

    /**
     * 初次启动时，获取本地主题
     * @returns {Promise}
     */
    static async getLocalTheme() {
        let theme = await this.getTheme();
        return theme;
    }

    static getTheme() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(THEME_FLAG, (err, theme) => {
                if (err) {
                    CommonLogical.handlerCommonErrorLogical(err);
                    return;
                }
                let themeFlag = theme || ThemeFlags['Default'];
                resolve(ThemeFactory.createTheme(themeFlag));
            })
        })
    }

    /**
     * 存储新的主题
     * @param themeFlag
     */
    static saveTheme(themeFlag) {
        AsyncStorage.setItem(THEME_FLAG,themeFlag,(err)=>{
            if (err) {
                CommonLogical.handlerCommonErrorLogical(err);
            }
        })
    }

    /**
     * 创建一个主题样式
     * @param themeFlag 主题标识
     * @returns {{themeColor: *, styles: *}}
     */
    static createTheme(themeFlag) {
        return {
            themeColor: themeFlag,
            styles: StyleSheet.create({
                selectedTitleStyle: {
                    color: themeFlag,
                },
                tabBarSelectedIcon: {
                    tintColor: themeFlag,
                },
                navBar: {
                    backgroundColor: themeFlag,
                }
            }),
        }

    }
}
