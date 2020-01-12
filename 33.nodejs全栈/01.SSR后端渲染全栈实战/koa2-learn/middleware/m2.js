/**
 * Created by yangli on 2020/1/12.
 */
/**
 * Created by yangli on 2020/1/12.
 */
/**
 * Created by yangli on 2020/1/12.
 */

// 查看ctx对象
function m2(ctx) {
    console.log('m2: ',ctx.path);
}

module.exports = function () {
    return async function (ctx, next) {
        console.log('m2 start')
        m2(ctx);
        await next();
        console.log('m2 end')
    }
};
