define(function (require, exports, module) {
    var SliderUnlock = require('./model/SliderUnlock');
    exports.init = function () {
        var sliderUnlock = new SliderUnlock("#slider",{
            successLabelTip: "验证成功",
            min: 20
        },function () {
            alert('验证完成');
        })
        sliderUnlock.init();
    }
})