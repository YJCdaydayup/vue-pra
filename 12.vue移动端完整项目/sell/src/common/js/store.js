/**
 * Created by yangli on 2019/1/27.
 */
export const saveToLocal = function (id, key, value) {
  let seller = localStorage.__seller__; // 存的是json字符串
  if (!seller) {
    seller = {};
    seller[id] = {};
  }else {
    seller = JSON.parse(seller);
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  localStorage.__seller__ = JSON.stringify(seller);
};


export const loadFromLocal = function (id, key, def) {
  let seller = localStorage.__seller__; // 存的是json字符串
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }

  let ret = seller[key];
  return ret || def;
};
