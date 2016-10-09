const router = require('express').Router();
const Admin = require('../models/admin');
const path              = require('path');
const userController    = require('../controllers/userController');
const controller = require('../controllers/admin');

/* ------------------- TO DO LIST ------------------- */
router.post('/admin/users/:userId/todos', controller.todos.add);
router.put('/admin/users/:userId/todos/:todoId', controller.todos.update);
router.delete('/admin/users/:userId/todos/:todoId', controller.todos.delete);
router.get('/admin/users/:userId/todos', controller.todos.fetchAll);

/* ------------------- USER SIGNUP + LOGIN ------------------- */

/* User Endpoints */
router.post('/admin/user/signup', userController.signup);

router.post('/admin/user/signin', userController.signin );



/* 404 Redirection */
router.get('*', (req, res) => res.sendStatus(404) );


module.exports = router;
