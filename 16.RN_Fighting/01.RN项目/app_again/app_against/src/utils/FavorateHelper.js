import React from 'react'
import {
    AsyncStorage
} from 'react-native'

export const FAVORITE_SCHEME = {
    MAIN: 'LSC_Main'
}

export default class FavorateHelper {
    constructor(scheme) {
        this.scheme = scheme;
    }

    saveMainListItem(key, data) {
        AsyncStorage.setItem(key, data, err => {
            if (!err) {
                this.updateLocalKeysMap(key, true)
            }
        });
    }

    removeMainListItem(key) {
        AsyncStorage.removeItem(key, err => {
            if (!err) {
                this.updateLocalKeysMap(key, false)
            }
        })
    }

    updateLocalKeysMap(key, isAdd) {
        this.getAllLocalKeys().then(keys => {
            let index = keys.indexOf(key);
            if (index > -1) {
                if (!isAdd) {
                    keys.splice(index, 1);
                    AsyncStorage.setItem(this.scheme, JSON.stringify(keys), err => {

                    })
                }
            } else {
                if (isAdd) {
                    keys.push(key);
                    AsyncStorage.setItem(this.scheme, JSON.stringify(keys), err => {

                    })
                }
            }
        })
    }

    getAllLocalKeys() {
       return new Promise((resolve, reject) => {
           AsyncStorage.getItem(this.scheme, (err, keys) => {
               if (!err) {
                   if (!keys) {
                       resolve([])
                   }else {
                        resolve(JSON.parse(keys))
                   }
               }else {
                   reject(err);
               }
           })
       })
    }
}
