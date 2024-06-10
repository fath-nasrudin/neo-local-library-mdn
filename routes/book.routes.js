const router = require('express').Router();
const bookController = require('../controllers/book.controller');

router.route('/')
  .get(bookController.bookList);

router.route('/create')
  .get(bookController.bookCreateGet)
  .post(bookController.bookCreatePost);

router.route('/:id')
  .get(bookController.bookDetail);

router.route('/:id/delete')
  .get(bookController.bookDeleteGet)
  .post(bookController.bookDeletePost);

router.route('/:id/update')
  .get(bookController.bookUpdateGet)
  .post(bookController.bookUpdatePost);

module.exports = router;