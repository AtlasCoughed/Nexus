'use strict';

var router = require('express').Router();
var path = require('path');
var controller = require('../controllers/admin');

/* ------------------- TO DO LIST ------------------- */
router.get('/admin/user/todos', controller.todos.fetchAll);
router.post('/admin/user/todos', controller.todos.add);
router.delete('/admin/user/todos/:todoId', controller.todos.delete);

/* ------------------- USER SIGNUP + LOGIN ------------------- */
router.post('/admin/user/signup', controller.auth.signUp);
router.post('/admin/user/signin', controller.auth.signIn);
router.post('/admin/user/googleSignIn', controller.auth.googleSignIn);

/* 404 Redirection */
router.get('*', function (req, res) {
  return res.sendStatus(404);
});

module.exports = router;

//# sourceMappingURL=admin-compiled.js.map