import mongoose from 'mongoose'
import glob from 'glob'
import path from 'path'

export const initSchemas = () => {
    glob.sync(path.resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

export const init = ()=>{
    mongoose.Promise = global.Promise
    let maxCountedTime = 0
    let db = 'mongodb://127.0.0.1:27017/chat_room'
    return new Promise((resolve, reject) => {
        mongoose.connect(db, {

        })
        mongoose.connection.on('disconnected', () => {
          maxCountedTime++
          if (maxCountedTime < 5) {
            // 断开重连
            mongoose.connect(db, {

            })
          } else {
            throw new Error('数据库挂了吧！')
          }
        })

        mongoose.connection.on('error', (err) => {
          reject()
          console.log(err)
        })

        mongoose.connection.once('open', () => {
          resolve()
          console.log('MongoDB Connected Successful！！！')
        })
    })
}