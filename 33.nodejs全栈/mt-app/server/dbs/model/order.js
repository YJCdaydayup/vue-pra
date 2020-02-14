/**
 * Created by yangli on 2020/2/3.
 */

const mongoose = require('mongoose')

let OrderSchema = new mongoose.Schema({
  id: {
    type: String,
    requrie: true
  },
  user: {
    type: String,
    require: true
  },
  time: {
    type: String,
    require: true
  },
  total: {
    type: Number,
    require: true
  },
  imgs: {
    type: Array,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  status: {
    type: Number,
    require: true
  }
})

let Order = mongoose.model('Order',OrderSchema)


export default Order
