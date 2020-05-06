const app = new Vue({})

const store = new Vuex.Store({})

const router = new Router({
    routes: [
        {path: '/p1', components: Page1},
        {path: '/p2', components: Page2},
        {path: '/p3', components: Page3}
    ]
})

// entry-server.js

export default context = {
    router.push(context.url)
    return Promise.all(router.getMatchedComponents().map(function (component) {
        if (component.fetchServerData) {
            return component.fetchServerData(store)
        }
    })).then(()=>{
        context.state = store.state
        return app
    })
}