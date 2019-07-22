const express = require('express'); //--> creates routes
const router = express.Router();

router.get('/', (req, res) => {
  Drinks.findAll({}, function(err, drinks) {
    if (err) res.json(err)
    res.json(drinks)
  })
})

router.get('/drinks/:id', (req, res) => {
  Drinks.findById(req.params.id).populate('drink').exec( (err,drink) => {
    if (!err) {
      res.status(200).json(drink);
    } else {
      res.status(500).json(err)
    }
  })
})

router.post('/drinks', (req, res) => {
  console.log(req.body)
  let drinkName = new Drink({
    drinkName: req.body.name,
    picture: req.body.picture
  });
  drink.save((err, drink) => {
    if(err) res.json(err);
    res.status(201).json(drink);
  });
})

router.put('/drink/:id', (req, res) => {
  Drinks.findByIdAndUpdate(req.params.id, {
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
  db.drink.destroy({
    where: {id: parseInt(req.params.id)}
  }).then(function(data) {
    res.redirect('/');
  });
});

module.exports =  router;