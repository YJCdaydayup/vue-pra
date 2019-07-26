// export default class CEPromise {
//     constructor() {
//         this.cancel = false;
//         this.promise = null;
//     }
//
//     createCancelablePromise(promise) {
//         this.promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 this.cancel ? reject({cancel: true}) : promise.then((res) => {
//                     resolve(res);
//                 });
//                 this.cancel ? reject({cancel: true}) : promise.catch(err => {
//                     reject(err);
//                 })
//             }, 2000)
//         })
//     }
//
//     cancelable() {
//         this.cancel = true;
//     }
// }

function CancelPromise() {
    var cancel = false;

    function cancelable() {
        cancel = true;
    }

    function getOuterPromise(promise) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                promise.then(res => {
                    cancel ? reject({cancel: true}) : resolve(res);
                })
                promise.catch(err=>{
                    cancel?reject({cancel: true}): reject(err);
                })
            }, 2000)
        });
    }

    return {
        cancel: cancelable,
        getOuterPromise: getOuterPromise
    }
}

module.exports = CancelPromise();