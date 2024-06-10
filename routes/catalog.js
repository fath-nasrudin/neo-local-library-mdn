const router = require('express').Router();
const {index} = require('../controllers/book.controller');

const bookRoutes = require('./book.routes');
const authorRoutes = require('./author.routes');
const bookinstanceRoutes = require('./bookinstance.routes');
const genreRoutes = require('./genre.routes');

router.route('/').get(index);

router.use('/books', bookRoutes);
router.use('/authors', authorRoutes);
router.use('/genres', genreRoutes);
router.use('/bookinstances', bookinstanceRoutes);

module.exports = router;