/**
 * Created by yangli on 2018/9/27.
 */

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  // 这里的字段必须要和数据库对应起来
  userId: {type: String},
  userName: String,
  userPwd: String,
  orderList: Array,
  cartList: [
    {
      productId: String,
      productName: String,
      salePrice: String,
      productImage: String,
      checked: String,
      productNum: String
    }
  ],
  addressList: [
    {
      addressId: String,
      userName: String,
      postCode: Number,
      streetName: String,
      tel: {
        type:Number
      },
      isDefault: Boolean
    }
  ]
});

module.exports = mongoose.model('User',userSchema,'users');
