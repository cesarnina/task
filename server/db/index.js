// This module is to bring your Sequelize instance (`db`) together
// with your models.

const db = require('./database');
const Todo = require('./models/Todo');

module.exports = {
  db,
  Todo,
};