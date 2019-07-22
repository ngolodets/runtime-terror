const express = require('express');
const router = express.Router();
const Drink = require('../models/drink');

router.get('/', (req, res) => {
  res.json({type: 'success', message: "You accessed the protected api routes"})
})


router.get('/', (req,res) => {
	drink.find({}, (err, drinks) => {
		err ? console.log(err) : res.json(drinks);
	})
})

module.exports = router;
