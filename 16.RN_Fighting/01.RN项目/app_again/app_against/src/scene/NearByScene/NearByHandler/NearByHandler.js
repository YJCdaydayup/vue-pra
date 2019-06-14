export default NearByHandler = function () {

}

NearByHandler.asyncNetworkEvent = function () {
    this.startAsyncMethod().then(res => {
        console.log(res);
    }).catch(err => {
        console.log('failed' + err);
    });
};

NearByHandler.startAsyncMethod = async function () {
    let res = await this.startAwaitMethod(666);
    let res1 = await this.startAwaitMethod1(res + 1)
    console.log(res + 'haha')
    if (res1) {
        return res1;
    }
}

NearByHandler.startAwaitMethod = function (param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 2000)
    })
}

NearByHandler.startAwaitMethod1 = function (param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 2000)
    })
}

NearByHandler.startAwaitMethod2 = function (param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 3000)
    })
}
