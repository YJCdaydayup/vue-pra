/**
 * Created by yangli on 2019/1/27.
 */

/**
 * 解析url参数
 * @example "http://localhost:8080/#/goods?id=12345" goods?id=12345
 * @return Object {id:123456,a:b}
 **/
export function urlParse() {
  let tmps = window.location.href.split('/');
  let url = tmps[tmps.length-1];
  let obj = {};
  // 1.学习一下这个正则用法
  let reg = /[?&][^?&]+=[^?&]+/g;
  // 2.匹配得到数组
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    })
  }
  return obj;
}
