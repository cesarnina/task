const Sequelize = require('sequelize')
const db = require('./db')

const Todo = db.define('todos', {
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
})

module.exports = Todo
