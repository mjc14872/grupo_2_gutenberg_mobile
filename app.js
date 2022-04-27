const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const {check, body, cookie} = require('express-validator');
const session = require('express-session');
const recordame = require('./middlewares/recordar');
const locals = require('./middlewares/locals');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const { METHODS } = require('http');
const app = express();
const LogsMiddleware = require('./middlewares/userLogs.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configuración
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Define la ubicación de la carpeta de las Vistas
app.use(methodOverride("_method")); 
app.use(recordame);
app.use(locals);
app.use(LogsMiddleware);

// Rutas
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

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
  res.render('error');
});

module.exports = app;
