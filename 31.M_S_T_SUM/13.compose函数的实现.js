function compose(middlewares) {
    return function (ctx) {
        let index = 0

        function dispatch() {

            if (index === middlewares.length) {
                return false
            }

            let fn = middlewares[index]

            return fn(ctx, function () {
                return dispatch(index ++)
            })
        }

        dispatch(0)
    }
}

let mid1 = function(params) {
    return function (ctx, next) {
        console.log('mid1')
        next() 
        console.log('mid1')
    }   
}

let mid2 = function(params) {
    return function (ctx, next) {
        console.log('mid2')
        next() 
        console.log('mid2')
    }   
}

let mid3 = function(params) {
    return function (ctx, next) {
        console.log('mid3')
        next() 
        console.log('mid3')
    }   
}

let arr = [mid1(), mid2(), mid3()]

// compose(arr)({})

function compose_new(middlewares) {
    return function(ctx) {
        function dispath(i) {
            if (i === middlewares.length) {
                return false
            }
            let fn = middlewares[i]
            console.log(fn)
            fn.call({},ctx, function() {
                dispath(i + 1)
            })
        }
        dispath(0)
    }
}

compose_new([mid1(),mid2(),mid3()])({})