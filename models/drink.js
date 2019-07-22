const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  drink: {
    drinkName: String,
    type: String,
    category: String,
    picture: String,
    glass: String,
    ingredients: [],
    instructions: String,
    measurements: [],
    user: [{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User'
    }]
  }
});

module.exports =  mongoose.model('Drink', drinkSchema);
