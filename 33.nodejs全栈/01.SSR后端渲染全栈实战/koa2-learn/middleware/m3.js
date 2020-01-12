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
function m3(ctx) {
    console.log('m3: ',ctx.path);
}

module.exports = function () {
    return async function (ctx, next) {
        console.log('m3 start')
        m3(ctx);
        await next();
        console.log('m3 end')
    }
};
