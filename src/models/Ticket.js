const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Ticket = sequelize.define('Ticket', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    file_path: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    status: {
        type: DataTypes.ENUM('open', 'in_progress', 'closed'),
        defaultValue: 'open',
    },
});

module.exports = Ticket;

