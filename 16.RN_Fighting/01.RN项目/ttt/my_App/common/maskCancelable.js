/**
 * Created by yangli on 2019/6/2.
 */
export default function makeCancelable(promise) {
    let hasCanceled_ = false;
    const wrappePromse = new Promise((resolve, reject)=>{
        promise.then(val=>{
            hasCanceled_?reject({hasCanceled_: true}):resolve(val);
        });
        promise.catch(err=>{
            hasCanceled_?reject({hasCanceled_: true}):resolve(err);
        })
    });
    return {
        promise:wrappePromse,
        cancel() {
            hasCanceled_ = true;
        }
    }
}


// 使用
// 1.包装一下正常的网络请求: this.cancelable = makeCancelable(fetch())
// 2.通过这个获取回调数据: this.cancelable.promise.then(res=>res.json()).then(resule => {
//
// })
// 3.可以通过这个取消请求: this.cancelable.cancel()