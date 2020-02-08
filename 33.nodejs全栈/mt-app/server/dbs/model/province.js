/**
 * Created by yangli on 2020/2/1.
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ProvinceSchema = new Schema({
  id: {
    type: String,
    require: true
  },
  value: {
    type: String,
    require: true
  }

});

export default mongoose.model('Province',ProvinceSchema);
