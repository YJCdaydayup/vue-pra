/**
 * Created by yangli on 2019/12/16.
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function f1(person) {
    // 当是引用类型传递进来时，默认就有一个：var person = person; 产生了一个新的引用，只是没看到而已
    // var person = person; 指向同一个地址
    person.name = 'ls'; // 同一个地址的name改变了
    person = new Person('HEHE', 18); // 而新的person又指向了新的Person对象了
}

var p = new Person('Sara', 18);

console.log(p.name);

f1(p);

console.log(p.name);


var x = 12

function f2(x) {
    x = 13;
}

f2(x);

var num1 = 55;
var num2 = 66;

function f3(num, num1) {
    num = 100;
    num1 = 100;
    num2 = 100;
    console.log(num)
    console.log(num1)
    console.log(num2)
}

f3(num1, num2) 

console.log(num1);
console.log(num2)
// console.log(num);


var arr = [1, 2, 3, 4, 5, 23, 5, 6, 2, 3, 4, 6, 7, 8, 1];

function deleteMul(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var nArr = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (nArr.indexOf(arr[i]) > -1) {
            continue;
        }
        nArr.push(arr[i]);
    }
    return nArr;
}


console.log(deleteMul(arr));