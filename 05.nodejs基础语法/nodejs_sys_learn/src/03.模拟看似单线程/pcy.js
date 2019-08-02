function doSomething(callback) {
    setInterval(function () {
        callback();
    }, 2000);
    console.log('配餐')
    console.log('配餐')
    console.log('配餐')
}

doSomething(function () {
    console.log('吃薯条吧');
});