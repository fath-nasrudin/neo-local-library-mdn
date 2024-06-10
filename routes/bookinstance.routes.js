const router = require('express').Router();
const bookinstanceController = require('../controllers/bookinstance.controller');

router.route('/')
  .get(bookinstanceController.bookinstanceList);

router.route('/create')
  .get(bookinstanceController.bookinstanceCreateGet)
  .post(bookinstanceController.bookinstanceCreatePost);

router.route('/:id')
  .get(bookinstanceController.bookinstanceDetail);

router.route('/:id/delete')
  .get(bookinstanceController.bookinstanceDeleteGet)
  .post(bookinstanceController.bookinstanceDeletePost);

router.route('/:id/update')
  .get(bookinstanceController.bookinstanceUpdateGet)
  .post(bookinstanceController.bookinstanceUpdatePost);

module.exports = router;