require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

const songRouter = require('./routes/song');

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/songs',songRouter);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(process.env.PORT || 3001);
