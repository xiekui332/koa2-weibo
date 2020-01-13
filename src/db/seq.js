/**
 * @description sequelize
 * @author  xk
 */


const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd, isTest } = require('../utils/env')
let conf = {
    host: MYSQL_CONF.host,
    dialect:'mysql'
}

if(isTest) {
    conf.logging = () => {}
}

// 线上环境， 使用连接池
if(isProd) {
    conf.pool = {
        max: 5,     // 连接池中最大的连接数量
        min: 0,     // 最小的链接数量
        idle: 10000     // 一个连接池 10s 内没有被使用，则释放
    }
}


const seq = new Sequelize(MYSQL_CONF.dataBase, MYSQL_CONF.user, MYSQL_CONF.password, conf)

module.exports = seq



