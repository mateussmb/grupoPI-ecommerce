const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const indexRouter = require('./src/routes/index');
const publicRouter = require('./src/routes/publicRouter');
const privateRouter = require('./src/routes/privateRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, './src/views'));// implementado src
app.set('view engine', 'ejs');

// Allow the server to use the PUT and DELETE method

app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'kabum',
  saveUninitialized:true,
  resave:true
}))

app.use('/', indexRouter);
//Route from user prublic
app.use('/', publicRouter);
//Route from user extrict
app.use('/', privateRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});



// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
    res.render('error');
    });

module.exports = app;
