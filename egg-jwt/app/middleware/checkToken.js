const jwt = require('jsonwebtoken');
const url = require('url')
module.exports = (options, app) => {
    return async function checkToken(ctx, next) {
        let pathname = url.parse(ctx.request.url).pathname;
        let token = ctx.request.header['token']
        if (pathname == '/login' || pathname == '/jwt' || pathname == '/findOne') {
            await next()
        } else {
            if (!token) {
                ctx.status = 401;
                ctx.body = {
                    message: '没有token'
                }
                return;
            } else {
                let decode = await ctx.service.jwt.verifyJwt(token)
                console.log(decode)
                if (decode) {
                    await next()
                } else {
                    ctx.status = 401;
                    ctx.body = 'token错误'
                }
            }
        }
    };
};