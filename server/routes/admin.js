const path              = require('path');
const userController    = require('../controllers/userController');


/* ------------------- USER SIGNUP + LOGIN ------------------- */

/* User Endpoints */
router.post('/admin/user/signup', (req, res) => {
  userController.signup
});

router.post('/admin/user/signin', userController.signin );

/* 404 Redirection */
router.get('*', (req, res) => res.sendStatus(404) );


module.exports = router;
