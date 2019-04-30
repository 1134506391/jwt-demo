'use strict';

const Service = require('egg').Service;

class UserService extends Service {

    async findById(id) {
        const { ctx } = this;
        const user = await ctx.model.User.findById(id);
        if (!user) {
            ctx.throw(404, 'user not found');
        }
        return user;
    }
    async findOne(username) {
        const { ctx } = this;
        const user = await ctx.model.User.find({
            where: {
                username: username
            }
        });
        console.log(user)
        if (!user) {
            return false
        }
        return true;
    }
}

module.exports = UserService;