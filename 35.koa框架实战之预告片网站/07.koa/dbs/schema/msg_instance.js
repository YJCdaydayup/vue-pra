import mongoose from 'mongoose'

const instanceSchema = new mongoose.Schema({
  type: Number,
  fromName: String,
  fromUid: String,
  content: String,
  toName: String,
  toUid: String
})

const Msg_Instance = mongoose.model('Msg_Instance', instanceSchema)

export default Msg_Instance