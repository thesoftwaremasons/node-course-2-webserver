const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + "/views/partials");

// hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log(req.method + " " + req.url);
  next();
});

hbs.registerHelper('currentDate', () => {
  return new Date().getFullYear();
});
// hbs.registerHelper("screamit", (text) => {
//   return text.toUpperCase();
// });


app.get('/', (req, res) => {
  var data = {
    name: 'femi',
    address: ['akungba', 'dara', 'bisi']
  }
  res.send(data);
  // res.send('Hello Express');
});

app.get('/About', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About me',

  });
  // res.send("Hey i am in about");
})
app.listen(3000);
