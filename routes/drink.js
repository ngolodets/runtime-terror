const express = require('express'); //--> creates routes
const router = express.Router();

router.get('/', (req, res) => {
  db.drinks.findAll().then(function(drink) {
    res.render('index', {drink})
  })
})

// router.post('/drinks/:user_id', (req, res) => {

// })

// router.get('/drink', (req, res) => {

// })

// router.get('/drink/:id', (req, res) => {

// })

// router.put('/drink/:id', (req, res) => {

// })

router.delete('/drink/:id', (req, res) => {
  db.drink.destroy({
    where: {id: parseInt(req.params.id)}
  }).then(function(data) {
    res.redirect('/');
  });
});

module.exports =  router;