const asyncHandler = require('express-async-handler');

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
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
