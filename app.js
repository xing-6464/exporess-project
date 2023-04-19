const express = require('express');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const videoRouter = require('./routes/video');

const app = express();

// view engine setup

app.use(express.json());

app.use('/user', usersRouter);
app.use('/video', videoRouter);

app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

app.use((err, req, res, next) => {
  console.info(err);
  res.status(500).send('service Error');
});

module.exports = app;
