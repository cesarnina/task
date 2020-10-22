const Sequelize = require('sequelize');
const db = require('../database');

const Todo = db.define('todo', {
  taskName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  assignee: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  }
});

module.exports = Todo;
