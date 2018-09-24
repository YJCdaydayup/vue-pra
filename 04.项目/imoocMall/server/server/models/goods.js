/**
 * Created by yangli on 2018/9/24.
 */

var mongoose = require('mongoose');

// 1.定义表基础模型
var Schema = mongoose.Schema;

// 2.启动数据库

/**
 *  "productImage" : "1.jpg",
 "salePrice" : "129",
 "productName" : "小钢炮蓝牙音箱",
 "productId" : "201710017",
 "_id" : ObjectId("58e7058498dab115d336b3fc"),
 "productNum" : "2"
 */

// 3.定义商品模型
var productSchema = new Schema({
  "productId": String,
  "productName": {type: String},
  "salePrice": Number,
  "productImage": String
});

// 4.将这个商品模型输出(在这里定义连接的数据库以及对应的表)
// 最后一个表名不指定，就是以Goods小写，然后加上s成为goods作为表名去找数据库里面对应的表
module.exports = mongoose.model('Good', productSchema, 'users');

// 5.添加goods路由，并在app.js里面设置路由




