/**
 * Created by yangli on 2020/2/7.
 */

const mongoose = require('mongoose')

let CitySchema = new mongoose.Schema({
  id: {
    required: true,
    type: String
  },
  value: {
    required: true,
    type: Array
  }
})

const City = mongoose.model('City',CitySchema)

export default City
