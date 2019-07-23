require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const helmet = require('helmet');
const RateLimit = require('express-rate-limit');
const methodOverride = require('method-override');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(helmet());
//mongoose.connect('mongodb://localhost/runtime-terror');

const loginLimiter = new RateLimit({
  windowMs: 5*60*1000,
  max: 3,
  delayMs: 0,
  message: "Maximum login attempts exceeded!"
})
const signupLimiter = new RateLimit({
  windowMs: 60*60*1000,
  max: 3,
  delayMs: 0,
  message: "Maximum accounts created. Please try again later."
})

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to Mongo on ${db.host}:${db.port}`);
});
db.on('error', (err) => {
  console.log(`Database error:\n${err}`);
});

// app.use('/auth/login', loginLimiter);
// app.use('/auth/signup', signupLimiter);

app.use('/auth', require('./routes/auth'));
//will allow to keep routes in the separate file, and this is how to hook them up
// can use expressJWT({secret: process.env.JWT_SECRET}).unless({method: 'POST'}) to lock every path, except POST
app.use('/api', expressJWT({secret: process.env.JWT_SECRET}), require('./routes/api'));
app.use('/drink', require('./routes/api'));

app.listen(process.env.PORT, () => {
  console.log(` ❄️️  ❄ ...listening on port ${process.env.PORT}... ❄ ❄️ ` )
})