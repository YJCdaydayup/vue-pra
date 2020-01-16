const mongoose = require('mongoose');

let OrderSchema = new mongoose.Schema({
    name: String,
    age: Number
});

let Order = mongoose.model('Order',OrderSchema);

module.exports = Order;