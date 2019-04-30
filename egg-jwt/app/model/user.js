'use strict';
const moment = require('moment');
module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: STRING,
        },
        password: {
            type: STRING,
        },
        phone: {
            type: INTEGER,
        },
        avatar: {
            type: STRING,
        },
        sex: {
            type: INTEGER,
        },
        roleId: {
            type: INTEGER,
        },
        createdAt: {
            type: DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        updatedAt: {
            type: DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
    }, {
        freezeTableName: true,
        underscored: false,
    });
    User.associate = function() {
        app.model.User.belongsTo(app.model.Role, { as: 'role' });
    };
    return User;
};