const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    // 这里的箭头函数上下文是window
    perimeter:() => 2 * Math.PI * this.radius
};

// console.log(shape.perimeter());
//
//
// console.log(true + 1);


const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a)

console.log(a[b]);

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);