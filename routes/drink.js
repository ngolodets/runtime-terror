const express = require('express'); //--> creates routes
const router = express.Router();

// GET /drinks -- display all drinks
router.get('/', (req, res) => {
  Drink.find({}, function(err, drinks) {
    if (err) return res.send(err)
    res.json(drinks)
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