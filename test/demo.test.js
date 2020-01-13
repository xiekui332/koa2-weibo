/**
 * @description test demo
 * @author  xk
 */

 function sum (a, b) {
     return a + b
 }

 // 常用 .toBe() .not.toBe()
 test('test demo ', () => {
     const res = sum(10, 20)
     expect(res).toBe(30)
    //  expect(res).not.toBe(30)
 })
 
