var express = require('express');
var router = express.Router();

const TestDB = require('../controllers/TestDB')

/* GET users listing. */
router.get('/', TestDB.index);
router.get('/accounts', TestDB.findAllAccounts);

module.exports = router;
