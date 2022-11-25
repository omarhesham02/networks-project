// Require dotenv
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || 'mongodb://0.0.0.0:27017';

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

// Routers
const loginRouter = require('./routes/login');

// View Engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Connect to MongoDB using mongoose
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

// Check if connection is successful
db.on('connected', () => {
    console.log(`Connected to MongoDB at ${DB_URI}`);
}); 

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Router bindings
app.use('/', loginRouter);




app.listen(PORT || 3000, () => console.log(`Server Online. Listening on port ${PORT}`));

