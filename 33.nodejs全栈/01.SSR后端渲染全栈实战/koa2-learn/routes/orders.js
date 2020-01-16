const router = require('koa-router')()
const Order = require('./../dbs/models/order');
const fs = require('fs');
const path = require('path');

router.prefix('/orders')

const Redis = require('koa-redis');

const Store = new Redis().client;

router.get('/', async (ctx, next) => {
  const st = await Store.hset('fix', 'name', 'Sara');
  const data = await Store.hget('fix','name');
  ctx.body = {
    code: data
  }
});

router.get('/login', async (ctx, next) => {
  console.log('请求了登录页面信息');
  await ctx.render('order',{
    title: '登录页面'
  })
});

router.post('/dologin', async (ctx, next) => {
  let file = ctx.request.files.avatar;
  console.log(file)
  let extname = path.extname(file.name);
  console.log(path.join(__dirname, './../public', 'junjun' + extname))
  await fs.rename(file.path,path.join(__dirname, './../public', 'junjun' + extname), (err) => {
    if (err) {
      throw err;
    }
  })
  ctx.body = {
    code: ctx.request.body.name
  }
});

// 里面可能有异步操作，就用async
router.get('/addOrder', async (ctx, next) => {
  let code;
  let {name, age} = ctx.request.query;
  await Store.hset('order', name, age);
  try {
    await Order.create({
      name,
      age
    })
    code = 0;
  } catch (e) {
    code = -1;
  }
  ctx.body = {
    code
  }
});

/**
 * 删除
 */
router.get('/deleteOrder',async (ctx, next) => {
  let code;
  console.log(ctx.request.query)
  try {
    await Order.deleteOne({
      name: ctx.request.query.name
    }, () => {})
    code = '删除成功';
  }catch(err) {
    throw err
  }
  ctx.body = {
    code 
  }
});

module.exports = router