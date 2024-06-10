const router = require('express').Router();
const authorController = require('../controllers/author.controller');

router.route('/')
  .get(authorController.authorList);

router.route('/create')
  .get(authorController.authorCreateGet)
  .post(authorController.authorCreatePost);

router.route('/:id')
  .get(authorController.authorDetail);

router.route('/:id/delete')
  .get(authorController.authorDeleteGet)
  .post(authorController.authorDeletePost);

router.route('/:id/update')
  .get(authorController.authorUpdateGet)
  .post(authorController.authorUpdatePost);

module.exports = router;