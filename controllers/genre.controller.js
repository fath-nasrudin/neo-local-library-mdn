const {body, validationResult} = require('express-validator');
const asyncHandler = require('express-async-handler');
const Genre = require('../models/genre');
const Book = require('../models/book');

exports.genreList = asyncHandler(async (req, res, next) => {
  const allGenres = await Genre.find();
 res.render('genre_list', {
  title: 'Genre List',
  genre_list: allGenres,
 })
});

exports.genreDetail = asyncHandler(async (req, res, next) => {
  const { id:genreId } = req.params;

  const [genre, booksInGenre] = await Promise.all([
    Genre.findById(genreId),
    Book.find({genre: genreId}).select('title summary'),
  ])

  if (!genre) {
    const err = new Error('Genre not found');
    err.status = 404;
    return next(err);
  }

  res.render('genre_detail', {
    title: 'Genre Detail',
    genre: genre,
    genre_books: booksInGenre,
  })
});

exports.genreCreateGet = (req, res, next) => {
  res.render('genre_form', {
    title: 'Create Genre',
    genre: null,
    errors: null,
  })
};

exports.genreCreatePost = [
  body('name', 'Genre name must contain at least 3 characters')
    .trim()
    .isLength({ min: 3 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const genre = new Genre({ name: req.body.name });

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render("genre_form", {
        title: "Create Genre",
        genre: genre,
        errors: errors.array(),
      });
    } else {
      const genreExists = await Genre.findOne({ name: req.body.name })
        .collation({ locale: "en", strength: 2 })
        .exec();

      if (genreExists) {
        // Genre exists, redirect to its detail page.
        res.redirect(genreExists.url);
      } else {
        await genre.save();
        // New genre saved. Redirect to genre detail page.
        res.redirect(genre.url);
      }
    }

  })
];

exports.genreDeleteGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: genreDeleteGet');
});

exports.genreDeletePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: genreDeletePost');
});

exports.genreUpdateGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: genreUpdateGet');
});


exports.genreUpdatePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: genreUpdatePost');
});
