const asyncHandler = require('express-async-handler');
const Author = require('../models/author');
const Book = require('../models/book');

exports.authorList = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().exec(); 
  res.render('author_list', {
    title: 'Author List',
    author_list: allAuthors,
  })
});

exports.authorDetail = asyncHandler(async (req, res, next) => {
  const [author, booksByAuthor] = await Promise.all([
    Author.findById(req.params.id),
    Book.find({author: req.params.id}).select('title summary'),    
  ])

  if (!author) {
    const err = new Error('Author not found');
    err.status = 404;
    return next(err);
  }
  
  res.render('author_detail', {
    title: 'Author Detail',
    author,
    author_books: booksByAuthor,
  })
});

exports.authorCreateGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: authorCreateGet');
});

exports.authorCreatePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: authorCreatePost');
});

exports.authorDeleteGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: authorDeleteGet');
});

exports.authorDeletePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: authorDeletePost');
});

exports.authorUpdateGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: authorUpdateGet');
});


exports.authorUpdatePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: authorUpdatePost');
});
