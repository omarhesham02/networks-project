// Require dotenv
require('dotenv').config();

const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

// View Engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB using mongoose
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// Check if connection is successful
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB at ${DB_URI}`);
}); 


app.get('/', function(req, res) {
  res.render('login')
});

app.post('/', function(req, res) {
  console.log(req.body);
  res.render('home')
});

app.listen(PORT || 3000, () => console.log(`Server Online. Listening on port ${PORT}`));

