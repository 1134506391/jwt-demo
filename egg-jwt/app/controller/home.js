'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        const result = await ctx.service.token.signJwt('aa');
        // const result = 'aaaaaa';
        const check = await ctx.service.token.decodeJwt(result);
        ctx.body = check;
        // ctx.body = 'hi, egg';
    }
    async jwt() {
        const { ctx } = this;
        const userId = '123456';
        const signResult = await ctx.service.jwt.signJwt(userId);
        const verifydata = await ctx.service.jwt.verifyJwt(signResult);
        ctx.body = `加密后的结果：${signResult}<br/>解密：${JSON.stringify(verifydata)}`;
    }
    async login() {
        const { ctx } = this;
        const body = ctx.request.body;
        const username = body.username;
        if (await ctx.service.role.findOne(username)) {
            const token = await ctx.service.jwt.signJwt(body)
            ctx.body = {
                ok: true,
                data: {
                    token
                }
            };
        } else {
            ctx.body = '账号密码错误'
        }

    }
}

module.exports = HomeController;