const asyncHandler = require('express-async-handler');

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
  res.end('NOT IMPLEMENTED: bookList');
});

exports.bookDetail = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookDetail');
});

exports.bookCreateGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookCreateGet');
});

exports.bookCreatePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookCreatePost');
});

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
