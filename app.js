const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const courseRouter = require('./routes/courses');
const mediaRouter = require('./routes/media');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const { application } = require('express');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);
app.use('/courses', courseRouter);
app.use('/media', mediaRouter);

module.exports = app;
