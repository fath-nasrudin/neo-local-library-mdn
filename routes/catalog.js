const router = require('express').Router();
const {index} = require('../controllers/book.controller');

const bookRoutes = require('./book.routes');
const authorRoutes = require('./author.routes');
const bookinstanceRoutes = require('./bookinstance.routes');
const genreRoutes = require('./genre.routes');

router.route('/').get(index);

router.use('/book', bookRoutes);
router.use('/author', authorRoutes);
router.use('/genre', genreRoutes);
router.use('/bookinstance', bookinstanceRoutes);

module.exports = router;