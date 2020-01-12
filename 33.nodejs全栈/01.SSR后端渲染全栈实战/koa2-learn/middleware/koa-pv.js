/**
 * Created by yangli on 2020/1/12.
 */

// 查看ctx对象
function pv(ctx) {
    console.log('pv: ',ctx.path);
}

module.exports = function () {
    return async function (ctx, next) {
        pv(ctx);
        await next();
    }
};
