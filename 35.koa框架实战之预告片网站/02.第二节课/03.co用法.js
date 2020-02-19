/**
 * Created by yangli on 2020/2/17.
 */
const co = require('co')
const fetch = require('node-fetch') // 服务端的默认请求插件

co(function *() {
    const res = yield fetch('https://api.douban.com/v2/movie/1291843')
    const movie = yield res.json()
    const summary = movie.summary
    console.log(summary)
})

function run(generator) {
    const iterator = generator()
    const it = iterator.next()
    const promise = it.value
    promise.then(data => {
        const it2 = iterator.next(data)
        const promise2 = it2.value
        promise2.then(data2 => {
            iterator(data2)
        })
    })
}