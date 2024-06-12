const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");

exports.index = asyncHandler(async (req, res, next) => {
  // Get details of books, book instances, authors and genre counts (in parallel)
  const [
    numBooks,
    numBookInstances,
    numAvailableBookInstances,
    numAuthors,
    numGenres,
  ] = await Promise.all([
    Book.countDocuments({}).exec(),
    BookInstance.countDocuments({}).exec(),
    BookInstance.countDocuments({ status: "Available" }).exec(),
    Author.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Local Library Home",
    book_count: numBooks,
    book_instance_count: numBookInstances,
    book_instance_available_count: numAvailableBookInstances,
    author_count: numAuthors,
    genre_count: numGenres,
  });
});

exports.bookList = asyncHandler(async (req, res, next) => {
  const allBooks = await Book
    .find({})
    .select( "title author")
    .sort({title: 1})
    .populate("author")
    .exec();

    res.render('book_list', { title: 'Book List',book_list: allBooks});
});

exports.bookDetail = asyncHandler(async (req, res, next) => {
  const [book, bookInstances] = await Promise.all([
    Book.findById(req.params.id).populate('author').populate('genre'),
    BookInstance.find({book: req.params.id}),
  ])

  if (!book) {
    const err = new Error('Book not found');
    err.status = 404;
    return next(err);
  }

  res.render('book_detail', {
    title: 'Book Detail',
    book,
    bookinstance_list: bookInstances,
  })
});

exports.bookCreateGet = asyncHandler(async (req, res, next) => {
 const [allAuthors, allGenres] = await Promise.all([
  Author.find().select('first_name, family_name').sort({family_name: 1}),
  Genre.find().sort({name: 1}),
 ])

 res.render('book_form', {
  title: 'Add Book',
  authors: allAuthors,
  genres: allGenres,
  book: null,
  errors: null,
 })
});

exports.bookCreatePost = [
  // Convert the genre to an array.
  (req, res, next) => {
    if (!Array.isArray(req.body.genre)) {
      req.body.genre =
        (!req.body.genre ) ? [] : [req.body.genre];
    }
    next();
  },
  // Validate and sanitize fields.
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("author", "Author must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("genre.*")
    .escape(),
  // Process request after validation and sanitization.

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      genre: req.body.genre,
    });
    
    // if validation failed. send the error with the data to the client
    if (!errors.isEmpty()) {
      const [allAuthors, allGenres] = await Promise.all([
        Author.find().sort({ family_name: 1 }).exec(),
        Genre.find().sort({ name: 1 }).exec(),
      ]);

      // Mark our selected genres as checked.
      for (const genre of allGenres) {
        if (book.genre.includes(genre._id)) {
          genre.checked = "true";
        }
      }
      res.render("book_form", {
        title: "Create Book",
        authors: allAuthors,
        genres: allGenres,
        book: book,
        errors: errors.array(),
      });
      return;
    }

    await book.save();
    res.redirect(book.url);
  }),
];

exports.bookDeleteGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookDeleteGet');
});

exports.bookDeletePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookDeletePost');
});

exports.bookUpdateGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookUpdateGet');
});


exports.bookUpdatePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookUpdatePost');
});
