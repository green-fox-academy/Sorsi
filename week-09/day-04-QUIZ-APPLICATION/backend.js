'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.json());
app.use('/views', express.static('views'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'questions',
});

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'views/game.html'));
});

app.get('/', (req, res) => {
  res.json({
    message: 'HIIII',
  });
});


app.listen(PORT, () => {
  console.log(`Server is running, running, running on port ${PORT}`);
});