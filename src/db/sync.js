/**
 * @description 同步sequelize
 * @author  xk
 */

const seq = require('./seq')

// require('./model')

// 测试 MySQL 连接

seq.authenticate().then(() => {
    console.log('ok')
}).catch(() => {
    console.log('err')
})


// 执行同步
seq.sync({force: true}).then(() => {
    console.log('ok')
    process.exit()
})