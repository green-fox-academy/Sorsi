'use strict';

require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello world'
  })
});

app.get('/api/title', (req, res) => {
  let sql = `SELECT * FROM posts;`;
  
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(200).send();
      return;
    }

    res.json({
      posts: rows,
    })
  });
});

app.post('/api/title', (req, res) => {
  let sql = `INSERT INTO posts (title, url) VALUES ('${req.body.title}', '${req.body.url}');`;
  
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(200).send();
      return;
    }

    res.json({
      posts: rows,
    })
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});