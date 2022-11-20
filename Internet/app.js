var express = require('express');
var path = require('path');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Connect MongoDB Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express', {useNewUrlParser: true, useUnifiedTopology: true});


// Create MongoDB Database Schema
var Schema = mongoose.Schema;
var UserDetail = new Schema({
    username: String,
    useremail: String,
    userpassword: String
});


app.get('/', function(req, res) {
  res.render('login')
});


app.listen(3000, () => console.log('Server Online. Listening on port 3000...'));


