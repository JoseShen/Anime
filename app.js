var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var randomRouter = require('./routes/random.js');
var finderRouter = require('./routes/finder.js');
var randomSongRouter = require('./routes/randomsong.js');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.set('view engine', 'jade');

app.use('/', indexRouter);
app.use('/random', randomRouter);
app.use('/finder', finderRouter);
app.use('/randomsong', randomSongRouter);

module.exports = app;
