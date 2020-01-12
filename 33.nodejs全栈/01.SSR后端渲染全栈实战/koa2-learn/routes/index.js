const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log('自启动1')
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/testAsync',async (ctx)=>{
  console.log('start',new Date().getTime());
  const a = await new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('a');
    },1000);
  });
  ctx.body = {
    a
  }
});

module.exports = router
