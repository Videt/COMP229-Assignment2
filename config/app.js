// Egor Shevchenko - 301084181. October 8, 2020

// installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan'); // logs requests and responses

//database setup
let mongoose = require('mongoose');
let DB = require('./db');

//point mongoose to the DB URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...')
});

// do all routing in these files
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express -e

app.use(logger('dev')); // logs the information about requests
app.use(express.json()); // helps to recognize JSON objects
app.use(express.urlencoded({ extended: false })); // allows to read URL data (GET requests)
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public'))); // use public directory
app.use(express.static(path.join(__dirname, '../node_modules'))); // use node_modules directory

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

module.exports = app;