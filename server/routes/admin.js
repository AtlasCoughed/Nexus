const router = require('express').Router();
const Admin = require('../models/admin');
const path              = require('path');
const userController    = require('../controllers/userController');


router.post('/admin/users', (req, res) => {
  res.status(200).send('POST /api/admin/users');
});

/* ------------------- TO DO LIST ------------------- */
// addTodo
router.post('/admin/users/:userId/todos', (req, res) => {
  const todo = req.body;
  todo.userId = req.params.userId;
  Admin.addTodo(req, res, todo);
});

// updateTodoById
router.put('/admin/users/:userId/todos/:todoId', (req, res) => {
  const todo = req.body;
  const todoId = req.params.todoId;
  Admin.updateTodoById(req, res, todo, todoId);
});

// deleteTodoById
router.delete('/admin/users/:userId/todos/:todoId', (req, res) => {
  const todoId = req.params.todoId;
  Admin.deleteTodoById(req, res, todoId);
});

// getAllTodos
router.get('/admin/users/:userId/todos', (req, res) => {
  const userId = req.params.userId;
  Admin.fetchAllTodos(req, res, userId);
});

/* ------------------- USER SIGNUP + LOGIN ------------------- */

/* User Endpoints */
router.post('/admin/user/signup', userController.signup);

router.post('/admin/user/signin', userController.signin );



/* 404 Redirection */
router.get('*', (req, res) => res.sendStatus(404) );


module.exports = router;
