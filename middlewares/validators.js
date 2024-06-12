const {body, validationResult} = require('express-validator');

const validateFirstName = () => {
  return body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters.")
};

const validateFamilyName = () => {
  return body("family_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
  .withMessage("Family name has non-alphanumeric characters.")
  }; 

const validateDateOfBirth = () => {
  return  body("date_of_birth", "Invalid date of birth")
  .optional({ values: "falsy" })
  .isISO8601()
  .toDate();
};

const validateDateOfDeath = () => {
  return  body("date_of_death", "Invalid date of death")
  .optional({ values: "falsy" })
  .isISO8601()
  .toDate();
};

module.exports = {
  validateFirstName,
  validateFamilyName,
  validateDateOfBirth,
  validateDateOfDeath,
  validationResult,
}