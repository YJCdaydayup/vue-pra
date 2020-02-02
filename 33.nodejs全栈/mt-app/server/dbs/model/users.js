/**
 * Created by yangli on 2020/2/1.
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
});

export default mongoose.model('Users',UserSchema);
