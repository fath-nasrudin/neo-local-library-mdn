const router = require('express').Router();
const genreController = require('../controllers/genre.controller');

router.route('/')
  .get(genreController.genreList);

router.route('/create')
  .get(genreController.genreCreateGet)
  .post(genreController.genreCreatePost);

router.route('/:id')
  .get(genreController.genreDetail);

router.route('/:id/delete')
  .get(genreController.genreDeleteGet)
  .post(genreController.genreDeletePost);

router.route('/:id/update')
  .get(genreController.genreUpdateGet)
  .post(genreController.genreUpdatePost);

module.exports = router;