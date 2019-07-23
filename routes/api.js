const express = require('express');
const router = express.Router();

// GET /drinks -- display/get all drinks
router.get('/', (req, res) => {
  Drink.find({}, (err, drinks) => {
    err ? console.log(err) : res.json(drinks);
    //res.json({type: 'success', message: "You accessed the protected api routes"})
  })
})

// GET /drinks/:drinkid -- display/get selected drink
router.get('/drinks/:drinkid', (req, res) => {
  Drink.findById(req.params.id).populate('drinks').exec(function(err, drink) {
    if (err) res.json(err)
    res.json(drink);
  })
})

// POST /drinks -- create new drink
// router.post('/drinks', (req, res) => {
//   let drink = new Drink({ 
//     drinkName: req.body.drinkName,
//     ingredients: req.body.ingredients,
//     instructions: req.body.instructins
//   });
//   drink.save((err, drink) => {
//     res.json(drink)
//   })
// })

//PUT /drinks/:id -- update one drink
// router.put('/drinks/:drinkid', (req, res) => {
//   Drink.findByIdAndUpdate(
//     req.params.drinkid, 
//     { drinkName: req.body.drinkName,
//       ingredients: req.body.ingredients,
//       instructions: req.body.instructins
//     }, 
//     {new: true}, 
//     (err, drink) => {
//       if (err) res.json(err)
//       res.status(203).json(drink)
//   }) 
// })

// DELETE /drinks/:drinkid -- delete a drink
// router.delete('/drinks/:drinkid', (req, res) => {
//   Drink.findByIdAndDelete(
//     req.params.drinkid,
//     function(err) {
//       if (err) res.json(err)
//       res.json({message: "DELETED!"})
//   })
// })

//GET /users/:userid/drinks -- get drinks for one user
router.get('/users/:userid/drinks', (req, res) => {
  User.findById(req.params.userid).populate('drinks').exec((err, user) => {
    if (err) res.json(err)
    res.json(user)
  }) 
})

//GET /users/:userid/drinks/:drinkid
router.get('/users/:userid/drinks/:drinkid', (req, res) => {
  Drink.findById(req.params.drinkid, (err, drink) => {
    if (err) res.json(err)
    res.json(drink)
  })
})

//POST /users/:userid/drinks -- create new drink 
router.post('/users/:userid/drinks', (req, res) =>{
  User.findById(req.params.userid, function(err, user) {
    Drink.create({
      drinkName: req.body.drinkName,
      ingredients: req.body.ingredients,
      instructions: req.body.instructins,
      user: req.params.userid
      }, function(err,drink){
          user.drinks.push(drink)
          user.save(function(err, user){
            if (err) res.json(err)
            res.json(user)
      })
    })
  })
})


module.exports = router;

