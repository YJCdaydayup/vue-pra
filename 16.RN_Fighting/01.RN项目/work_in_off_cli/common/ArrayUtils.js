export default class ArrayUtils {
    /**
     * 克隆一个新数组
     **/
    static clone(array) {
        let temp = [];
        array.forEach((item, index) => {
            temp[index] = item;
        })
        return temp;
    }

    /**
     * 判断两个数组是否相等且一一对应
     * @params arr1
     * @returns {boolean}
     **/
    static isEqual(arr1, arr2) {
        if (!(arr1 && arr2)) return false;
        if (arr1.length === 0 || arr2.length === 0) return false;
        for (let i = 0; len = arr1.length, i < len; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}