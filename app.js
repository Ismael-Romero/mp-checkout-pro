require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');

var homeRouter = require('./routes/home');
var checkoutRouter = require('./routes/checkout');
var statusRouter = require('./routes/status');
var preferenceRouter = require('./routes/create_preference');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/checkout', checkoutRouter);
app.use('/status', statusRouter);
app.use('/create_preference', preferenceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
