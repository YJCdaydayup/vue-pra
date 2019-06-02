export default NearByHandler = function () {

}

NearByHandler.asyncNetworkEvent = function () {
    this.startAsyncMethod().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
};

NearByHandler.startAsyncMethod = async function () {
    let res = await this.startAwaitMethod(666);
    let res1 = await this.startAwaitMethod1(res + 1)
    if (res1) {
        return res1;
    }
}

NearByHandler.startAwaitMethod= function (param) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           return reject(param);
        },2000)
    })
}

NearByHandler.startAwaitMethod1 = function (param) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            return resolve(param);
        },2000)
    })
}