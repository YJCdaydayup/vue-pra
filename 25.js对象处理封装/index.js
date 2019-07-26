// import CEPromise from './src/CEPromise'

var Cancelable = require('./src/CEPromise');

window.onload = function () {

    // var cePromise = new CEPromise();

    function start() {
        $("start").onclick = function () {
            // cePromise.createCancelablePromise(event());
            // cePromise.promise.then((res) => {
            //     console.log(res)
            // }).catch(err => {
            //     console.log(JSON.stringify(err))
            // });

            Cancelable.getOuterPromise(event()).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })

        }

        $("cancel").onclick = function () {
           Cancelable.cancel()
        }
    }

    function event() {
        return new Promise((resolve, reject) => {
            resolve('我就是要处理的事件');
        })
    }

    function $(id) {
        let el = document.getElementById(id);
        if (!!el) {
            return el;
        } else {
            throw "this element does not exist."
        }
    }

    start();
}