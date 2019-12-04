var arr = [1, 2, 3, 4, 5, 8, 8, 8, 9]

function randomsort1(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        const ran = parseInt(Math.random() * len)
        const temp = arr[ran]
        arr[ran] = arr[i]
        arr[i] = temp
    }
    return arr
}

function randomsort2(arr) {
    const newarr = []
    while (arr.length) {
        const ran = parseInt(Math.random() * arr.length)
        newarr.push(arr[ran])
        arr.splice(ran, 1)
    }
    return newarr
}

function randomsort3(arr) {
    return arr.sort(() => Math.random() - 0.5)
}

console.log(randomsort1(arr))