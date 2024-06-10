const asyncHandler = require('express-async-handler');
const Author = require('../models/author');

exports.authorList = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().exec(); 
  res.render('author_list', {
    title: 'Author List',
    author_list: allAuthors,
  })
});

exports.authorDetail = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: authorDetail');
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
