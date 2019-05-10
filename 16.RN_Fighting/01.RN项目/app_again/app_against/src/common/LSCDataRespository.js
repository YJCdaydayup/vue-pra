import React from 'react'
import AsyncStorage from 'react-native-async-storage'

const EXPIRED_TIME = 1000;

export default class LSCDataRespository {
    fetchLSCDataRespository(url) {
        return new Promise((resolve, reject) => {
            this.fetchLocalDataRespository(url).then(result => {
                if (this.checkLocalRespositoryExpired(result, EXPIRED_TIME)) {
                    // 数据过期重新获取
                    this.fetchNetDataRespository(url).then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    })
                }else {
                    let data = JSON.parse(result);
                    resolve(JSON.parse(data.data));
                }
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
            fetch(url).then(result =>result.json()).then(result => {
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

    /**
     * 判断数据是否过期
     * @param result 原始数据
     * @param expiredTime 过多久过期
     * @returns {boolean} true 过期 false 未过期
     */
    checkLocalRespositoryExpired(result, expiredTime) {
        let resultData = JSON.parse(result);
        let {update_time} = resultData;
        let nowDateTime = new Date().getTime();
        let expitedDateTime = update_time + expiredTime;
        return nowDateTime > expitedDateTime;
    }
}
