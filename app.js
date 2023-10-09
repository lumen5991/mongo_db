var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var routes = require('./routes'); 

mongoose.connect('mongodb://localhost/benin_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes); // Utilisez vos routes dans le chemin '/api'

module.exports = app;
