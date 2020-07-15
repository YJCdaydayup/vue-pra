function compose(middlewares) {
    return function(context) {
        function dispath(i) {
            if (i === middlewares.length) {
                return false
            }
            let fn = middlewares[i]
            fn(ctx,function() {
                return dispath(i + 1)
            })
        }
    }
}

function mid1(ctx, next) {
    console.log('mid1')
    next()
}