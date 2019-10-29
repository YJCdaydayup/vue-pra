'use strict'

const mongoose = require('mongoose');

// 先要连接数据库
mongoose.connect('mongodb://localhost:27017/mongoose');

// 创建一个类(默认创建一个小写加s的集合)，然后实例这个类产生的每一个对象都是一个文档
let Cat = mongoose.model('Cat',{
    name: String
});

let kitty = new Cat({
    name: 'Kitty'
});

kitty.save((err)=>{
   console.log('save succuss');
});