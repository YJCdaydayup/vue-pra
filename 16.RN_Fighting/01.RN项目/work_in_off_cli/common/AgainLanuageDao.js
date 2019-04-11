import {
    AsyncStorage
} from 'react-native'

import keysData from './../res/data/keys.json'
import langsData from './../res/data/langs.json'

export const Lanuage_Flag  = {
    flag_key: "key_data",
    flag_language: "language_data"
}

export default class AgainLanuageDao {
    constructor(flag) {
        this.flag = flag
    }

    fetch() {
        return new Promise((resolve, reject)=>{
            AsyncStorage.getItem(this.flag, (err, data)=>{
                if (!data) {
                    let res = this.flag === Lanuage_Flag.flag_key? keysData: langsData
                    this.save(res);
                    resolve(res)
                }else {
                  try {
                      resolve(JSON.parse(data));
                  }catch (err) {
                      reject(err);
                  }
                }
            })
        })
    }

    save(data) {
        return new Promise((resolve,reject)=>{
            try {
                AsyncStorage.setItem(this.flag, JSON.stringify(data),(err)=>{
                   if (!err) {
                       resolve();
                   }else {
                       reject(err);
                   }
                })
            }catch (err) {
                reject(err);
            }
        })
    }
}