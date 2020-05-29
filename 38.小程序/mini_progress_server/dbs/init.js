import mongoose from 'mongoose'
import glob from 'glob'
import path from 'path'
import conf from './../conf/conf'
require('./schema/job')

mongoose.Promise = global.Promise

export const initSchemas = () => {
  glob.sync(path.resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

export const connect = () => {
  let maxCountedYime = 0
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'production') {
      mongoose.set('debug', true)
    }
    mongoose.connect(conf.DBURL, {

    })

    mongoose.connection.on('disconnected', () => {
      maxCountedYime++
      if (maxCountedYime < 5) {
        // 断开重连
        mongoose.connect(conf.DBURL, {

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
