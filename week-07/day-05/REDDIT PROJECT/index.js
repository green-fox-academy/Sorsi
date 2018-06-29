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

app.get('/api/posts/:id', (req, res) => {
  let sql = `SELECT title FROM posts WHERE id = '${req.params.id}';`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    } else {
      res.status(200).send;

      res.json({
        title: rows,
      });
    }
  });
});

app.get('/api/posts', (req, res) => {
  let sql = `SELECT * FROM posts;`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    } else {
      res.status(200).send;

      res.json({
        posts: rows,
      });
    }
  });
});

app.post('/api/posts', (req, res) => {
  let sql = `INSERT INTO posts (title, url) VALUES ('${req.body.title}', '${req.body.url}');`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    } else {
      res.status(200).send();
      res.json({
        posts: rows,
      })
    }
  });
});

app.put('/api/posts/:id/upvote', (req, res) => {
  let sql = `UPDATE posts SET vote = '1', score = score + 1 WHERE id = '${req.params.id}';`; // az útvonalban lévő : az param, 

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    let queryTXT = `SELECT * FROM posts WHERE id = '${req.params.id};'`;

    conn.query(queryTXT, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.json({
        message: `Posted a post with ${req.params.id}`,
      });
    });
  });
});

app.put('/api/posts/:id/downvote', (req, res) => {
  let sql = `UPDATE posts SET vote = '-1', score = score - 1  WHERE id = '${req.params.id}';`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    let queryTXT = `SELECT * FROM posts WHERE id = '${req.params.id};'`;

    conn.query(queryTXT, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.json({
        result: rows,
      });
    });
  });
});

app.delete('/api/posts/:id', (req, res) => {
  let sql = `DELETE FROM posts WHERE id = ${req.params.id};`;

  conn.query(sql, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      message: `ID: ${req.params.id} have been deleted.`,
    });
  });
})

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});