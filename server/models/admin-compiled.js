'use strict';

var db = require('../config/db');
var password = require('../config/passwordTools.js');
var jsonWebToken = require('jsonwebtoken');

/* ------------------- TO DO LIST ------------------- */
var fetchAllTodos = function fetchAllTodos(req, res) {
  console.log('Inside fetchAllTodos in model');
  db.Todo.findAll().then(function (todos) {
    res.status(200).send(todos);
  }).catch(function (err) {
    res.status(500).send(err.message);
  });
};

var addTodo = function addTodo(req, res, todo) {
  console.log('Inside addTodo in model:', todo);
  db.Todo.create(todo).then(function (todo) {
    res.status(200).send(todo);
  }).catch(function (err) {
    res.status(500).send(err.message);
  });
};

var deleteTodo = function deleteTodo(req, res, todoId) {
  console.log('Inside deleteTodo in model');
  db.Todo.findById(todoId).then(function (todo) {
    res.status(200).send(todo);
    todo.destroy();
  }).catch(function (err) {
    res.status(500).send('Failed to delete todo item:', todo);
  });
};

exports.todos = {
  fetchAll: fetchAllTodos,
  add: addTodo,
  delete: deleteTodo
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

<<<<<<< 76c9f1f3a222b471927f4dc44ba24cf1ec3b761e
=======
var googleSignIn = function googleSignIn(req, res) {
  console.log("INSIDE OF GOOGLESIGNING");
};

>>>>>>> [feature] adds gapi and jquery for front - back end handoff
exports.auth = {
  signUp: signUp,
  signIn: signIn,
  googleSignIn: googleSignIn
};

//# sourceMappingURL=admin-compiled.js.map