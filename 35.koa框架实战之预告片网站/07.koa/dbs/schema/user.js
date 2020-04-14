import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  uid: {
    type: String,
    unique: true,
    required: true
  },
  sessionId: {
    type: String,
    unique: true
  }
})

const User = mongoose.model('User', userSchema)

export default User