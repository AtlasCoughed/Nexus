'use strict';

var model = require('../models/admin');

/* ------------------- TO DO LIST ------------------- */
var addTodo = function addTodo(req, res) {
  var todo = req.body;
  todo.userId = req.params.userId;
  model.todos.add(req, res, todo);
};

var updateTodoById = function updateTodoById(req, res) {
  var todo = req.body;
  var todoId = req.params.todoId;
  model.todos.update(req, res, todo, todoId);
};

var deleteTodoById = function deleteTodoById(req, res) {
  var todoId = req.params.todoId;
  model.todos.delete(req, res, todoId);
};

var fetchAllTodos = function fetchAllTodos(req, res) {
  var userId = req.params.userId;
  model.todos.fetchAll(req, res, userId);
};

/* ------------------- SIGN IN / SIGN UP ------------------- */

var signIn = function signIn(req, res) {
  var loginAttempt = req.body;

  // Refactor later, to streamline form for the user to either enter username OR email
  // if((!req.body.username && !req.body.email) || !req.body.password){
  //   res.status(500).send("Invalid or missing inputs");
  // }
  // uniqueIdentifier = (req.body.username) ? 'username' : 'email';

  loginUsername = loginAttempt.username;
  loginEmail = loginAttempt.email;
  loginPassword = loginAttempt.password;

  model.auth.signIn(req, res, loginUsername, loginEmail, loginPassword);
};

var signUp = function signUp(req, res) {
  var newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    cohort: req.body.cohort,
    profilePic: req.body.profilePic,
    bio: req.body.bio
  };
  model.auth.signUp(req, res, newUser);
};

var googleSignIn = function googleSignIn(req, res) {
  console.log();
};

exports.todos = {
  add: addTodo,
  update: updateTodoById,
  delete: deleteTodoById,
  fetchAll: fetchAllTodos
};

exports.auth = {
  signIn: signIn,
  signUp: signUp,
  googleSignIn: googleSignIn
};

//# sourceMappingURL=admin-compiled.js.map