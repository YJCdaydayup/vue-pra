function request() {
    // Ajax.request({
    //     url:"http://172.23.1.237:3000/api",
    //     params:{id:123,userid:'abc'},
    //     type:'json',
    //     callback: callback
    // });

    // var ajax = new AjaxHandler({
    //     url: "http://172.23.1.237:3000/api",
    //     params: {id: 123, userid: 'abc'},
    //     type: 'json',
    //     callback: function (res) {
    //         console.log(res)
    //     }
    // });
    // ajax.request();
    AjaxHandler.request({
        url: "http://172.23.1.237:3000/api",
        params: {id: 123, userid: 'abc'},
        type: 'json',
        callback: function (res) {
            console.log(res);
        }
    })

    // AjaxHandler.request({
    //     url: "http://172.23.1.237:3000/api",
    //     params: {id: 123, userid: 'abc'},
    //     type: 'json'
    // }).then((res)=>{
    //     console.log(res)
    // }).catch(res=>{
    //     console.log(res)
    // })
}

function callback(res) {
    console.log(res);
}