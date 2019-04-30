/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1556517853118_8825';

    // add your middleware config here
    config.middleware = ['csrf', 'checkToken'];
    // jwt
    config.jwt = {
        secret: '我是密钥',
    };
    // 数据库
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        dialectOptions: {
            charset: 'utf8mb4',
        },
        database: 'eggjwt',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '123456',
        timezone: '+08:00',
    };
    // cors跨域
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        domainWhiteList: ['http://localhost:8080']
    };
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};