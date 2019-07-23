const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  measure: String,
  ingredient: String
})

const drinkSchema = new mongoose.Schema({
    drinkName: String,
    idDrink: Number,
    type: String,
    category: String,
    picture: String,
    glassType: String,
    ingredients: [ingredientSchema],
    instructions: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Drink', drinkSchema);
