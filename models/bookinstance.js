const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const { Schema } = mongoose;
const bookinstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

bookinstanceSchema.virtual('url').get(function() {
  return `/catalog/bookinstances/${this._id}`;
});

bookinstanceSchema.virtual('due_back_formatted').get(function() {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
})


module.exports = mongoose.model('BookInstance', bookinstanceSchema);