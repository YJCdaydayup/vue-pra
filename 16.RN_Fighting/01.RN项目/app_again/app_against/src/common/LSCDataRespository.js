import React from 'react'
import {AsyncStorage} from 'react-native'

export default class LSCDataRespository {
    fetchLSCDataRespository(url) {
        return new Promise((resolve, reject) => {
            this.fetchLocalDataRespository(url).then(result => {
                resolve(result);
            }).catch(err => {
                this.fetchNetDataRespository(url).then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                })
            })
        })
    }

    fetchNetDataRespository(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(result => {
                if (!result) {
                    reject('this data is nil !!!')
                } else {
                    resolve(result)
                    this.saveRespository(url, result);
                }
            }).catch(err => {
                reject(err);
            })
        })
    }

    fetchLocalDataRespository(url) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(url, (err, result) => {
                if (!err) {
                    if (!result) {
                        reject('this data is nil !!!');
                    } else {
                        resolve(result);
                    }
                } else {
                    reject(err);
                }
            })
        })
    }

    saveRespository(url, data, callback) {
        if (!(url && data)) return false;
        let resultData = {update_time: new Date().getTime(), data: JSON.stringify(data)}
        AsyncStorage.setItem(url, JSON.stringify(resultData), callback)
    }
}
