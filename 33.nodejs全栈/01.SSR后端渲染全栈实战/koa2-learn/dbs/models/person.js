/**
 * Created by yangli on 2020/1/13.
 */

const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({
    name: String,
    age: String
});

module.exports = mongoose.model('Person',personSchema);
