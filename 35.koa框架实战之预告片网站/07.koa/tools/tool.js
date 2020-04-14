import User from '../dbs/schema/user.js'

export default class Tool {
    static async loadInfoInSessionStorage() {
        global.sessionStorage = {}
        let store = global.sessionStorage
        let users = await User.find({})
        console.log(users)
        for (let i = users.length; i--;) {
            let {name,uid} = users[i]
            if (!store[uid]) {
                store[uid] = {}
            }
            store[uid].name = name
            store[uid].uid = uid
        }
        console.log('同步用户信息到sessionStorage成功',store)
    }
}