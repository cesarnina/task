const Sequelize = require('sequelize');
const db = require('../database');

const Todo = db.define('todo', {
  taskName: {
    type: Sequelize.STRING,
    allowNull: false,
    validata: {
      notEmpty: true
    },
  },
  assignee: {
    type: Sequelize.STRING,
    allowNull: false,
    validata: {
      notEmpty: true
    },
  }
});

module.exports = Todo;
