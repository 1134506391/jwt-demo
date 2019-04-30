module.exports = (options, app) => {
    return async function csrf(ctx, next) {
        ctx.state.csrf = ctx.csrf;
        console.log(ctx.state.csrf)
        await next();
    };
};