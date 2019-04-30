'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/jwt', controller.home.jwt);
    router.post('/login', controller.home.login);


    router.get('/role', controller.role.index);
    router.get('/role/:id', controller.role.show);
    router.post('/role', controller.role.create);
    router.put('/role/:id', controller.role.update);
    router.del('/role/:id', controller.role.destroy);


    router.get('/findOne', controller.user.findOne);
};