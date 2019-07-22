const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
  measure: String,
  ingredient: String
})

const drinkSchema = new mongoose.Schema({
  drinkName: String,
  dateModified: Date,
  type: String,
  category: String,
  picture: String,
  glassType: String,
  ingredients: [ingredientsSchema],
  instructions: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Drink', drinkSchema);
