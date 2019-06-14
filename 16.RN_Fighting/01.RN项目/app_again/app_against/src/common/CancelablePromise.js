export default function CancelablePromise(promise) {
    let cancel__ = false;
    let cancelablePromise = new Promise((resolve, reject) => {
        promise.then(val=>{
            cancel__?reject({
                cancel: true
            }): resolve(val);
        });
        promise.catch(err => {
            cancel__? reject({
                cancel: true
            }): reject(err);
        })
    })
    return {
        promise: cancelablePromise,
        cancel() {
            cancel__ = true;
        }
    }
}
