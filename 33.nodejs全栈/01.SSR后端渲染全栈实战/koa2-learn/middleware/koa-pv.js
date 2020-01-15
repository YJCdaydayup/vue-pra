// 查看ctx对象
function pv(ctx) {
    // 设置了session，就会返回一个session存到cookie里面给到客户端
    ctx.session.count = {
        name: 'Sara',
        age: 18
    };
    console.log('pv: ',ctx.path);
}

module.exports = function () {
    return async function (ctx, next) {
        pv(ctx);
        await next();
    }
};
