function my_pv1(ctx) {
    console.log('开始请求')
    console.log(ctx.request.url)
}

module.exports = function() {
    return async function(ctx, next) {
        my_pv1(ctx);
        await next();
    }
}