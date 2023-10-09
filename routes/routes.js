var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
/* var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); */

var routes = require('./routes'); 

mongoose.connect('mongodb://localhost/benin_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use('/api', routes);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* app.use('/', indexRouter);
app.use('/users', usersRouter); */

module.exports = app;
