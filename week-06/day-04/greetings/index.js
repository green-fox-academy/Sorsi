const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs
  let name = 'Guest';
  if (req.query.name) {
    name = req.query.name;
  }
  res.render('home', {
    title: 'Hello GreenFox',
    text: name,
  });
});

app.get('/users/:Orsi', (req, res) => {

  res.send(req.params.Orsi);
});

/* app.get('/?name={name}', (req, res) => {
  console.log(req.query)
  let name = 'Fox';
  if (req.query.name) {
    name = req.query.name;
  }
  res.send(`${req.params.message}, ${req.query.name}`);
}); */

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});