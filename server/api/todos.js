const router = require('express').Router();
const { Todo } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.findAll()
    res.json(todos)
  } catch (error) {
    next(error)
  }
});

router.get('/:todoId', async (req, res, next) => {
  try {
    const id = req.params.todoId
    const todo = await Todo.findByPk(id)
    res.json(todo)
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { assignee, taskName } = req.body
    const todo = await Todo.create({ assignee, taskName })
    res.json(todo)
  } catch (error) {
    next(error)
  }
});

router.put('/:todoId', async (req, res, next) => {
  try {
    const id = req.params.todoId
    const { assignee, taskName } = req.body
    const todo = await Todo.findByPK(id)
    const newTodo = await todo.update({ assignee, taskName })
    res.json(newTodo)
  } catch (error) {
    next(error)
  }
});

router.delete('/:todoId', async (req, res, next) => {
  try {
    const id = req.params.todoId
    const removeTodo = await Todo.destroy({where: {id: id}})
    res.json(removeTodo)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
