'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async list({ offset = 0, limit = 10 }) {
    const { ctx } = this;
    const result = await ctx.model.Role.findAndCountAll({
      offset,
      limit,
      order: [
        [ 'createdAt', 'desc' ],
        [ 'id', 'desc' ],
      ],
    });
    return result;
  }
  async find(id) {
    const { ctx } = this;
    const role = await ctx.model.Role.findById(id);
    if (!role) {
      ctx.throw(404, 'user not found');
    }
    return role;
  }
  async create(role) {
    const { ctx } = this;
    return ctx.model.Role.create(role);
  }
  async update({ id, updates }) {
    const { ctx } = this;
    const role = await ctx.model.Role.findById(id);
    if (!role) {
      ctx.throw(404, 'user not found');
    }
    return role.update(updates);
  }
  async del(id) {
    const { ctx } = this;
    const role = await ctx.model.Role.findById(id);
    if (!role) {
      ctx.throw(404, 'role not found');
    }
    return role.destroy();
  }
}

module.exports = RoleService;
