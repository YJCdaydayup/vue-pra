define(function (require, exports, module) {
    var styles = require('./expand/style');
    function addClick() {
        var btn = document.getElementById('click');
        btn.onclick = function () {
            this.style.backgroundColor = styles.class1.backgroundColor;
            this.style.fontSize = styles.class1.fontSize;
            this.style.top = styles.class1.top;
        }
    }
    exports.addClick = addClick;
});
