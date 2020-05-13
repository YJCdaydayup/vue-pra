export default {
    getInfo(ctx, next) {
        
    },
    getData(ctx, next) {
        let {name, age} = ctx.query
        console.log(name,age)
        ctx.body = {
            status: 0,
            data: {
                name,
                age
            }
        }
    }
}