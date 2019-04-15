/**
 * Created by yangli on 2019/4/15.
 */

import React from 'react'
import {
    AsyncStorage
} from 'react-native'

export default class DataRepository {
    fetchRepository(url) {
        return new Promise((resolve, reject)=> {
            this.fetchLocalRepository(url).then((result)=> {
                if (result) {
                    console.log(result)
                    resolve(result);
                } else {
                    console.log(111)
                    this.fetchNetRespotory(url).then((result)=> {
                        resolve(result);
                    }).catch(err=> {
                        reject(err);
                    })
                }
            }).catch(err=> {
                console.log(err)
                this.fetchNetRespotory(url).then((result)=> {
                    resolve(result);
                }).catch(err=> {
                    reject(err);
                })
            })
        })
    }

    fetchLocalRepository(url) {
        return new Promise((resolve, reject) => {
            // 获取本地数据
            // AsyncStorage.removeItem(url, ()=>{})
            AsyncStorage.getItem(url, (err, result)=> {
                // console.log(result)
                resolve(JSON.parse(result));
            })
        })
    }

    fetchNetRespotory(url) {
        return new Promise((resolve, reject)=> {
            fetch(url).then((response) => response.json()).then((result)=> {
                if (!result) {
                    reject(new Error('reponse is null'));
                    return false;
                } else {
                    resolve(result.items);
                    this.saveRepository(url, result.items);
                }
            }).catch(err=> {
                reject(err);
            })
        })
    }

    saveRepository(url, items, callback) {
        if (!(url && items)) return false;
        let wrapData = {items: items, update_date: new Date().getTime()};
        AsyncStorage.setItem(url, JSON.stringify(wrapData), callback)
    }

    /**
     * 判断数据是否过时
     * @param longTime 数据的时间戳
     * @returns {Boolean}
     **/
    checkedData(longTime) {
        let cDate = new Date();
        let tDate = new Date();
        tDate.setTime(longTime);
        if (cDate.getMonth() !== tDate.getMonth()) return false;
        if (cDate.getDay() !== tDate.getDay()) return false;
        if (cDate.getHours() !== tDate.getHours()) return false;
        return true
    }
}