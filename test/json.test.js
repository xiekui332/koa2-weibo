/**
 * @description json test
 * @author  xk
 */

 const server = require('./server')

 test('json 返回格式 ', async () => {
     const res = await server.get('/json')
     const res = await server.post('/json').send({
         
     })
     // 判断 obj 是否相等
     expect(res.body).toEqual({
        title: 'koa2 json'
     })

     expect(res.body.title).toBe('koa2 json')
 })
 