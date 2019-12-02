function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var num = Math.floor(arr.length / 2);// 向下取整，找中间数
    var numValue = arr.splice(num, 1);

    var left = [];
    var right = [];
    for (var i = arr.length; i--;) {
        if (arr[i] < numValue) {
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([numValue],quickSort(right));
}

var arr = [1,3,2,100,23,45,134,22,345,11,25,22,44,33,13,2,3,5,7,2,3,5,1,25];

console.log(quickSort(arr).join(' '));