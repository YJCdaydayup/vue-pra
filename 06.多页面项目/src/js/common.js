// 一般通过AMD定义一个common模块

define('common', function () {
    return {
        initIndex: function () {
            console.log("common init index");
        },
        initCart: function () {
            console.log("common init cart");
        }
    }
});