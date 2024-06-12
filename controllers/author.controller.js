const asyncHandler = require('express-async-handler');
const Author = require('../models/author');
const Book = require('../models/book');
const {validateFamilyName, validateFirstName, validateDateOfBirth, validateDateOfDeath, validationResult} = require('../middlewares/validators')

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

exports.authorCreateGet = (req, res, next) => {
  res.render('author_form', {
    title: 'Add Author',
    author: null,
    errors: [],
  });
};

exports.authorCreatePost = [
  validateFirstName(),
  validateFamilyName(),
  validateDateOfBirth(),
  validateDateOfDeath(),
  asyncHandler( async (req, res, next) => {
  const errors = validationResult(req);

  const author = new Author({
    first_name: req.body.first_name,
    family_name: req.body.family_name,
    date_of_birth: req.body.date_of_birth,
    date_of_death: req.body.date_of_death,
  });

 if (!errors.isEmpty()) {
    // There are errors. Render form again with sanitized values/errors messages.
    res.render("author_form", {
      title: "Create Author",
      author: author,
      errors: errors.array(),
    });
    return;
  }

  await author.save();
  res.redirect(author.url);
})
];

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
