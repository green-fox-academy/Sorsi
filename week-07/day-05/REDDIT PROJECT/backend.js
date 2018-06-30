'use strict';

require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use('/public', express.static('public'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello world',
  })
});

app.get('/api/posts/:id', (req, res) => {
  let sql = `SELECT title FROM posts WHERE id = ${req.params.id};`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      title: rows,
    });
  });
});

app.get('/api/posts', (req, res) => {
  let sql = `SELECT * FROM posts;`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      posts: rows,
    });
  });
});

app.post('/api/posts', (req, res) => {
  let sql = `INSERT INTO posts (title, url) VALUES ('${req.body.title}', '${req.body.url}');`;

  conn.query(sql, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      message: `New post has been added.`,
    })
  });
});

app.put('/api/posts/:id/upvote', (req, res) => {
  let sql = `UPDATE posts SET vote = '1', score = score + 1 WHERE id = ${req.params.id};`; // az útvonalban lévő : az param, 

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    let queryTXT = `SELECT * FROM posts WHERE id = ${req.params.id};`;

    conn.query(queryTXT, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.json({
        message: `Post ID: ${req.params.id} upvoted.`,
      });
    });
  });
});

app.put('/api/posts/:id/downvote', (req, res) => {
  let sql = `UPDATE posts SET vote = '-1', score = score - 1  WHERE id = ${req.params.id};`;

    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }

      let queryTXT = `SELECT * FROM posts WHERE id = ${req.params.id};`;

      conn.query(queryTXT, (err) => {
        if (err) {
          console.log(err);
          res.status(500).send();
          return;
        }
        res.json({
          message: `Post ID ${req.params.id} downvoted.`,
        });
      });
    })
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
});

app.put('/api/posts/:id', (req, res) => {
  let sql = `UPDATE posts SET title = ${req.body.title}, url = ${req.body.url} WHERE id = ${req.params.id};`;

  conn.query(sql, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      message: `ID: ${req.params.id} post has been updated.`,
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
