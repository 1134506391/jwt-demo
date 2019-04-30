'use strict';
const moment = require('moment');
module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const Role = app.model.define('role', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: STRING,
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
    Role.associate = function() {
        app.model.Role.hasMany(app.model.User, { as: 'user' });
    };
    return Role;
};