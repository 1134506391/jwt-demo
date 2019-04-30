'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
    async index() {
        const { ctx } = this;
        const query = {
            limit: ctx.helper.parseInt(ctx.query.limit),
            offset: ctx.helper.parseInt(ctx.query.offset),
        };
        ctx.body = await ctx.service.role.list(query);
    }
    async show() {
        const { ctx } = this;
        const id = ctx.helper.parseInt(ctx.params.id);
        ctx.body = await ctx.service.role.find(id);
    }
    async create() {
        const ctx = this.ctx;
        const body = ctx.request.body;
        const role = await ctx.service.role.create(body);
        ctx.status = 201;
        ctx.body = role;
    }
    async update() {
        const ctx = this.ctx;
        const id = ctx.helper.parseInt(ctx.params.id);
        const body = ctx.request.body;
        ctx.body = await ctx.service.role.update({ id, updates: body });
    }
    async destroy() {
        const ctx = this.ctx;
        const id = ctx.helper.parseInt(ctx.params.id);
        await ctx.service.role.del(id);
        ctx.status = 200;
    }
}

module.exports = RoleController;