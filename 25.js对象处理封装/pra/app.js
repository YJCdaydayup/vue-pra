define(function (require, exports, module) {
    var Slider = require('./model/slider')
    exports.start = function () {
        var slider = new Slider('#box',{
            duration: 500
        },function () {

        })
        slider.init();
    }
})