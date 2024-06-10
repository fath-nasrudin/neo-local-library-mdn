const asyncHandler = require('express-async-handler');
const BookInstance = require('../models/bookinstance');

exports.bookinstanceList = asyncHandler(async (req, res, next) => {
  const allBookInstances = await BookInstance
    .find()
    .populate("book")
    .exec();

  res.render('bookinstance_list', {
    title: 'Book Copies List',
    bookinstance_list: allBookInstances, 
  });
});

exports.bookinstanceDetail = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookinstanceDetail');
});

exports.bookinstanceCreateGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookinstanceCreateGet');
});

exports.bookinstanceCreatePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookinstanceCreatePost');
});

exports.bookinstanceDeleteGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookinstanceDeleteGet');
});

exports.bookinstanceDeletePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookinstanceDeletePost');
});

exports.bookinstanceUpdateGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookinstanceUpdateGet');
});


exports.bookinstanceUpdatePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: bookinstanceUpdatePost');
});
