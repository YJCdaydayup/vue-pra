import mongoose from 'mongoose'

const msgSchema = new mongoose.Schema({
    uid: String,
    private_msgs: [],
    section_msgs: [],
    group_msgs: []
})

const Message = mongoose.model('Message', msgSchema)

export default Message