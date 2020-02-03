/**
 * Created by yangli on 2020/2/3.
 */

const mongoose = require('mongoose')

let MenuSchema = new mongoose.Schema({
  menu: Array
})

let Menu = mongoose.model('Menu',MenuSchema)


export default Menu
