'use strict'

var arr = [];
for (var i = 0; i < 10; i++) {
  var x = i;
  arr[i] = function () {
    return x;
  }
}

console.log(arr[8]())

var a = 123
if (true) {
  var a = 234
}
console.log(a);

var b = 'abc'
function test() {
  var b = 'cde'
}

test();

console.log(b);


