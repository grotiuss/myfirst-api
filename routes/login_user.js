var express = require('express');
var router = express.Router();

const restrict = require('../middlewares/restrict')

const loginUserController = require('../controllers/Login_user')

/* GET home page. */
router.get('/', loginUserController.index);
router.post('/', loginUserController.login_post)
router.post('/jwt-test', restrict, loginUserController.login_test)

module.exports = router;
