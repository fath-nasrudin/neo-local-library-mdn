var express = require('express');
var router = express.Router();
const catalogRoutes = require('./catalog');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect('/catalog');
});

router.use('/catalog', catalogRoutes)

module.exports = router;
