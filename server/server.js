require('dotenv').config();

// Handle uncaught exceptions
process.on('uncaughtException', err => {
  console.log("____Uncought exception____");
  console.log(err.name,err.message);
  process.exit(1);
});

const express = require('express');
const path = require('path');
const app = express();

const apiRouter = require('./routes/api');
const ErrorHandler = require('./utils/errorHandler');
const errorControler = require('./controllers/errorController');

app.use(express.json());

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api',apiRouter);

app.all('*', (req,res,next)=> {
  next(new ErrorHandler(`Can't find ${req.originalUrl}`,404));
});

app.use(errorControler);

const server = app.listen(process.env.PORT || 3001);

process.on('unhandledRejection', err => {
  console.log("____unhandled rejection____");
  console.log(err.name,err.message);
  server.close(()=>{
      process.exit(1);
  });
});

