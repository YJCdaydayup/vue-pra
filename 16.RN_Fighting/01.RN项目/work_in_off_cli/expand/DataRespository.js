import React from 'react'
import {
    AsyncStorage
} from 'react-native'

export default class DataRespository {
    fetchRespositoryData(url) {
        return new Promise((resolve, reject) => {
            this.fetchLocalRespository(url).then((result) => {
                if (result) {
                    resolve(result);
                } else {
                    // 网络数据
                    this.fetchNetRespository(url).then(result => {
                        resolve(result);
                    }).catch(err=>{
                        reject(err)
                    })
                }
            }).catch(err => {
                // 网络数据
                this.fetchNetRespository(url).then(result => {
                    resolve(result);
                }).catch(err=>{
                    reject(err)
                })

            })
        })
    }

    fetchLocalRespository(url) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(url, (err, result) => {
                if (!err) {
                    try {
                        resolve(JSON.parse(result));
                    } catch (err) {
                        reject(result);
                    }
                } else {
                    reject(err);
                }
            })
        })
    }

    fetchNetRespository(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => response.json()).then(result => {
                resolve(result);
                this.saveLocalStorage(url, result);
            }).catch(err => {
                reject(err);
            })
        })
    }

    saveLocalStorage(url, data) {
        let res = {
            update_time: new Date().getTime(),
            items: data
        }
        AsyncStorage.setItem(url, JSON.stringify(res), (err) => {
            if (!err) {

            }
        })
    }

    checkedData(longTime) {
        var cDate = new Date();
        var tDate = new Date(longTime + cDate.getTime());
        if (cDate.getMonth() !== tDate.getMonth()) return false;
        if (cDate.getDay() !== tDate.getDay()) return false;
        if (cDate.getHours() !== tDate.getHours()) return false;
        return true
    }
}
