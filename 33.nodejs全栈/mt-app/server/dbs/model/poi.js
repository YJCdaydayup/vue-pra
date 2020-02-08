/**
 * Created by yangli on 2020/2/7.
 */

const mongoose = require('mongoose')

let PoiSchema = new mongoose.Schema({
  name: String,
  province: String,
  city: String,
  country: String,
  areaCode: String,
  tel: String,
  area: String,
  add: String,
  type: String,
  module: String,
  longitude: Number,
  latitude: Number
})

let Poi = mongoose.model('Poi',PoiSchema)


export default Poi
