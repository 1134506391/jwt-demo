'use strict';

const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class JwtService extends Service {
    async signJwt(userInfo) {
        const { ctx } = this;
        const token = jwt.sign({ userInfo }, this.config.jwt.secret, {
            expiresIn: 60 * 60 * 24,
        });
        return token;
    }
    async verifyJwt(token) {
        const { ctx } = this;
        try {
            let decode = jwt.verify(token, this.config.jwt.secret);
            let username = decode.userInfo.params.username
            let hasUser = await ctx.service.user.findOne(username)
            if (!hasUser) {
                return false
            } else {
                return true;
            }
        } catch (err) {
            throw (err);
        }
    }
}

module.exports = JwtService;