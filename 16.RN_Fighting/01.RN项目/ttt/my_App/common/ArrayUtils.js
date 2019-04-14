/**
 * Created by yangli on 2019/4/13.
 */

export default class ArrayUtils {
    static updataArray(array, item) {
        for (let i = 0; len = array.length, i < len; i++) {
            let tp = array[i];
            if (tp === item) {
                array.splice(i, 1);
                return;
            }
        }
        array.push(item);
    }

    /**
     * 克隆一个数组
     **/
    static clone(from) {
        // if (!from) return [];
        // let newArray = [];
        // for (let i = 0; len = from.length, i < len; i++) {
        //     newArray[i] = from[i]
        // }
        return [...from];
    }

    /**
     * 判断两个数组的元素是否一一对应相等
     * @param arr1
     * @param arr2
     * @returns {boolean} true 数组长度相等且元素对应相等
     **/
    static isEqual(arr1, arr2) {
        if (!(arr1 && arr2)) return false;
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; len = arr2.length, i < len; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    /**
     * 将数组中指定元素移除
     **/
    static remove(array, item) {
        if (!array) return false;
        for (let i = 0; len = array.length, i < len; i++) {
            if (array[i] === item) {
                array.splice(i, 1);
            }
        }
    }
}
