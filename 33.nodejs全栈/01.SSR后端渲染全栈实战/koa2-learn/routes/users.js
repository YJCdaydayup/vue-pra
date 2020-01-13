const router = require('koa-router')()
const Person = require('./../dbs/models/person');

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 里面可能有异步操作，就用async
router.post('/addPerson',async (ctx, next)=>{
  const person = new Person({
    name: ctx.request.body.name,
    age: ctx.request.age
  })
  let code;
  try {
    await person.save();
    code = 0;
  }catch (e) {
    code = -1;
  }
  ctx.body = {
    code
  }
});

router.post('/getPerson',async (ctx, next)=>{
  const result = await Person.findOne({name: ctx.request.body.name})
  const results = await Person.find({name: ctx.request.body.name});
  ctx.body = {
    code: 0,
    result,
    results
  }
});

router.post('/updatePerson',async (ctx, next)=>{
  const result = await Person.updateOne({name: ctx.request.body.name},{
    $set:{age: 24}
  })
  ctx.body = '修改成功'
});

router.post('/deletePerson',async (ctx, next)=>{
  const result = await Person.deleteMany({name: ctx.request.body.name});
  ctx.body = `删除所有姓名是：${ctx.request.body.name} 成功`
})

module.exports = router
