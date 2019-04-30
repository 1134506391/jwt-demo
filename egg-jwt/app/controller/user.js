'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async findOne() {
        const { ctx } = this;
        const result = await ctx.service.user.findOne('admin');
        ctx.body = result;
    }
}

module.exports = UserController;