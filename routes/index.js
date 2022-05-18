var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect('/docs')
});

router.get('/test-commit', function(req,res,next) {
  console.log('Goyangg');
  res.send('Goyangggg!!!')
})

module.exports = router;
