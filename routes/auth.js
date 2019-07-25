const express = require('express'); //--> creates routes
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken'); //--> creates tokens

// Route for signup -- POST /auth/signup
// Arrow functions are safe to use for setting up routes
// There is no redirection to pages in the backend with react, but must use res.json()
router.post('/signup', (req, res) => {
  // see if the email is already in the db
  User.findOne({email: req.body.email}, (err, user) => {
    if (user) {
      // if yes, return an error
      res.json({type: 'error', message: 'Email already exists'})
    } else {
      // if no, create the user in the db
      let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      user.save((err, user) => {
        if (err) {
          res.json({type: 'error', message: 'Database error creating user'}) //, err}) //need to take out: {message: 'DB error', err} in production phase
        } else {
          // sign a token (this is the login step)
          var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
            expiresIn: "1d"
          });
          // res.json the token (the browser needs to store this token)
          res.status(200).json({type: 'success', user: user.toObject(), token})
        }
      })
    }
  })
})

// Route for login
router.post('/login', (req, res) => {
  // Find user in db by email
  User.findOne({email: req.body.email}).populate('drinks').exec((err, user), (err, user) => {
    // if there is no user, return error
    if (!user) {
      res.json({type: 'error', message: 'Account not found'}) //use react to prompt to sign up
    } else {
      // if user, check authentication
      if (user.authenticated(req.body.password)) {
        // if authenticated, sign a token (login)
        var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
          expiresIn: "1d"
        })
      // return the token to be saved by the browser
      res.json({type: 'success', user: user.toObject(), token})
      } else {
        res.json({type: 'error', message: 'Authentication failure'})
      }
    }
  })
})

// Route for validating tokens
router.post('/me/from/token', (req, res) => {
  // Make sure they sent us a token to check
  var token = req.body.token;
  if (!token) {
    // if no token, return an error
    res.json({type: 'error', message: "You must submit a valid token"})
  } else {
    // if token, verify it
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        // if token invalid, return error
        res.json({type: 'error', message: "Invalid token. Pleas login again."})
      } else {
        // if token is valid, look up user in the db
        User.findById(user._id).populate('drinks').exec((err, user) => {
          if (err) {
            // if user does not exist, return error
            res.json({type: 'error', message: "Database error during validation"})
          } else {
            // if user exists, send back user and token
            
            // right here, we could sign a new token:
            // var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
            //   expiresIn: "1d"
            // })

            //OR we could just return an existing one
            res.json({type: 'success', user: user.toObject(), token})
          }
        })
      }
    })
  }
})

module.exports = router;