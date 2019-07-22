const express = require('express');
const router = express.Router();
const Drink = require('../models/drink');

router.get('/', (req, res) => {
  Drink.find({}, (err, drinks) => {
    err ? console.log(err) : res.json(drinks);
    //res.json({type: 'success', message: "You accessed the protected api routes"})
  })
})

module.exports = router;

