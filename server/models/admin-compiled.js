'use strict';

var db = require('../config/db');
var password = require('../config/passwordTools.js');
var jsonWebToken = require('jsonwebtoken');

/* ------------------- TO DO LIST ------------------- */
var addTodo = function addTodo(req, res, todo) {
  console.log('Inside addTodo:', todo);
  db.Todo.create(todo).then(function (todo) {
    res.status(200).send(todo);
  }).catch(function (err) {
    res.status(500).send(err.message);
  });
};

var updateTodoById = function updateTodoById(req, res, todo, todoId) {
  console.log('Inside updateTodoById:', todo);
  db.Todo.update(todo, { where: { id: todoId } }).then(function () {
    res.status(200).send('Successfully updated todo item:', todoId);
  }).catch(function (err) {
    res.status(500).send('Failed to update todo item:', todoId);
  });
};

var deleteTodoById = function deleteTodoById(req, res, todoId) {
  console.log('Inside deleteTodoById');
  db.Todo.findById(todoId).then(function (todo) {
    todo.destroy();
    res.status(200).send('Successfully deleted todo item:', todo.id);
  }).catch(function (err) {
    res.status(500).send('Failed to delete todo item:', todo.id);
  });
};

var fetchAllTodos = function fetchAllTodos(req, res, userId) {
  console.log('Inside fetchAllTodos');
  db.Todo.findAll({ where: { adminId: userId } }).then(function (todos) {
    res.status(200).send(todos);
  }).catch(function (err) {
    res.status(500).send(err.message);
  });
};

/*------------------- SIGN IN/ SIGN UP ------------------- */

var signIn = function signIn(req, res, loginUsername, loginEmail, loginPassword) {
  db.User.findOne({
    where: {
      username: loginUsername,
      email: loginEmail
    },
    attributes: ['id', 'firstName', 'lastName', 'email', 'username', 'password', 'profilePic', 'bio']
  }).then(function (foundUser) {
    if (!foundUser) res.status(401).send('User not found.');else {
      // password.checkPassword(loginPassword, foundUser.password)
      //   .then(successfulMatch => {
      var token = jsonWebToken.sign(foundUser.dataValues, 'userDashboard');
      res.status(200).json({
        id: foundUser.id,
        firstName: foundUser.firstName,
        email: foundUser.email,
        username: foundUser.username,
        token: token
      });
      // .catch(error => {
      //   console.log("Password hashing error: ", error);
      //   res.status(500).send(error);
      // })
    }
  }).catch(function (err) {
    console.log('Line 84 Error:', err);
    res.status(500).send("Password do not match", err);
  });
};

var signUp = function signUp(req, res, newUser) {
  db.User.create(newUser).then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    res.status(400).send(err);
  });
};
exports.auth = {
  signUp: signUp,
  signIn: signIn,
  googleSignIn: googleSignIn
};

exports.todos = {
  add: addTodo,
  update: updateTodoById,
  delete: deleteTodoById,
  fetchAll: fetchAllTodos
};

//# sourceMappingURL=admin-compiled.js.map