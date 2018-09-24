/**
 * Created by yangli on 2018/9/22.
 */

// 一个js文件就是一个模块

// module.exports 相当于Vue里面的export default 默认输出
// module.exports = {
//   userName: "Sara",
//   sayHello: function () {
//     return "Hello"
//   }
// };

// 和上面一样的方式输出，单个输出
exports.userName = "Tom";
exports.sayHello = function () {
  return "World";
}
