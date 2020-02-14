/**
 * Created by yangli on 2020/2/11.
 */

const mongoose = require('mongoose')

let CartSchema = new mongoose.Schema({
  id: {
    require: true,
    type: String
  },
  detail: {
    require: true,
    type: Array
  },
  cartNo: {
    type: String,
    require: true
  },
  user: {
    type: String,
    require: true
  }
})

const Cart = mongoose.model('Cart',CartSchema)

export default Cart
