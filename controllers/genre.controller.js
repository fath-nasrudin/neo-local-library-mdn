const asyncHandler = require('express-async-handler');
const Genre = require('../models/genre');

exports.genreList = asyncHandler(async (req, res, next) => {
  const allGenres = await Genre.find();
 res.render('genre_list', {
  title: 'Genre List',
  genre_list: allGenres,
 })
});

exports.genreDetail = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: genreDetail');
});

exports.genreCreateGet = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: genreCreateGet');
});

exports.genreCreatePost = asyncHandler(async (req, res, next) => {
  res.end('NOT IMPLEMENTED: genreCreatePost');
});

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
