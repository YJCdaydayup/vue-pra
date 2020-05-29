import mongoose from 'mongoose'

const UserSchama = new mongoose.Schema({
    uid: {
        type: String
    },
    nickName: {
        type: String
    },
    gender: {
      type: String
    },
    language: {
      type: String
    },
    city: {
      type: String
    },
    province: {
      type: String
    },
    avatarUrl: {
      type: String
    },
    openId: {
      type: String,
      unique: true,
    },
    authToken: {
        code: {
            type: String
        },
        meta: {
            createdDate: {
                type: Date,
                default: Date.now()
            },
            expired: {
                type: Number,
                default: 5 * 60 * 1000
            }
        }
    }
})

const User = mongoose.model('User', UserSchama)

export default User