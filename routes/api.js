const express = require('express');
const router = express.Router();
const Drink = require('../models/api');

router.get('/', (req, res) => {
  res.json({type: 'success', message: "You accessed the protected api routes"})
})


router.get('/', (req,res) => {
	Drink.find({}, (err, drinks) => {
		err ? console.log(err) : res.json(drinks);
	})
})

router.get('/drinks/:id', (req, res) => {
  Drink.findById(req.params.id).populate('drinks').exec( (err, drinks) => {
    if (!err) {
      res.status(200).json(drinks);
    } else {
      res.status(500).json(err)
    }
  })
})

router.post('/drinks', (req, res) => {
  console.log(req.body)
  let drink = new Drink({
    drinkName: req.body.drinkName,
    picture: req.body.picture
  });
  drink.save((err, drink) => {
    if(err) res.json(err);
    res.status(201).json(drink);
  });
})

router.put('/drink/:id', (req, res) => {
  Drink.findByIdAndUpdate(req.params.id, {
    drinkName: req.body.drinkName,
    picture: req.body.picture
  }, {
    new: true
  }, (err, drink) => {
    res.status(203).json(drinkName);
  });
});

// router.get('/drink/:id', (req, res) => {

// })

router.delete('/drink/:id', (req, res) => {
  Drink.destroy({
    where: {id: parseInt(req.params.id)}
  }).then(function(data) {
    res.redirect('/drinks');
  });
});

module.exports = router;
