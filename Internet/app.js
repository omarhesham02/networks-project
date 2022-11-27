// Require dotenv
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();

// Routers
const loginRouter = require('./routes/login');

// View Engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Connect to MongoDB
MongoClient.connect(DB_URI, { useUnifiedTopology: true })
    .then(() => {
        console.log(`Connected to MongoDB at ${DB_URI}`);
    })
    .catch(err => {
        console.log(err);
    });


// Router bindings
app.use('/', loginRouter);



app.listen(PORT || 3000, () => console.log(`Server Online. Listening on port ${PORT}`));

