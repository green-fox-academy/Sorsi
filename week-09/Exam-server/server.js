'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  /* database: , */
});

app.use(express.json());
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});




app.listen(PORT, () => {
  console.log('Server is running, running, running...');
});