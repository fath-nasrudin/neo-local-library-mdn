const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100},
  family_name: {type: String, required: true, maxLength: 100},
  date_of_birth: {type: Date},
  date_of_death: {type: Date},
});

authorSchema.virtual('name').get(function() {
  let fullname = '';
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name};`
  }

  return fullname;
});

authorSchema.virtual('url').get(function() {
  return  `/catalog/author/${this._id}`;
});

module.exports = mongoose.model('Author', authorSchema);