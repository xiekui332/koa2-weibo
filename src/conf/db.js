/**
 * @description 存储配置
 * @author xk
 */

const { isProd } = require('../utils/env')

 let REDIS_CONF = {
     port: 6379,
     host: '127.0.0.1'
 }

 let MYSQL_CONF = {
     host: 'localhost',
     user:  'root',
     password:  '123',
     port:  '3306',
     dataBase:  'koa2_weibo_db'
 }

 if(isProd) {
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
 }else{
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
 }

 module.exports = {
     REDIS_CONF,
     MYSQL_CONF
 }