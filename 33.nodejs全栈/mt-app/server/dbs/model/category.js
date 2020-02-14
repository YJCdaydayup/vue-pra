/**
 * Created by yangli on 2020/2/10.
 */

const mongoose = require('mongoose')

let CategorySchema = new mongoose.Schema({
  city: {
    required: true,
    type: String
  },
  areas: {
    required: true,
    type: Array
  },
  types: {
    type: Array,
    required: true
  }
})

const Category = mongoose.model('Category',CategorySchema)

export default Category
