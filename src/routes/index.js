const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe: true,
    blogList: [{
        id: 1,
        title: 'a'
      },
      {
        id: 2,
        title: 'b'
      },
      {
        id: 3,
        title: 'c'
      }
    ]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  // const session = ctx.session
  // if(session.viewNum == null) {
  //   session.viewNum = 0
  // }

  // session.viewNum ++

  ctx.body = {
    title: 'koa2 json',
    // viewNum: session.viewNum
  }
})

module.exports = router