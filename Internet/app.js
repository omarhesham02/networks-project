// Require dotenv
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || 'mongodb://0.0.0.0:27017';

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

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

// Routers
const loginRouter = require('./routes/login');
const citiesRouter = require('./routes/cities');
const islandsRouter = require('./routes/islands');
const hikingRouter = require('./routes/hiking');
const incaRouter = require('./routes/inca');
const parisRouter = require('./routes/paris');
const searchresultsRouter = require('./routes/searchresults');
const wanttogoRouter = require('./routes/wanttogo');
const annapurnaRouter = require('./routes/annapurna');
const baliRouter = require('./routes/bali');
const romeRouter = require('./routes/rome');
const santoriniRouter = require('./routes/santorini');
//TODO-----
// const homeRouter = require('./routes/home');
// const registrationRouter = require('./routes/registration');

//---------



// Router bindings
app.use('/', loginRouter);
app.use('/cities', citiesRouter);
app.use('/islands', islandsRouter);
app.use('/hiking', hikingRouter);
app.use('/inca', incaRouter);
app.use('/paris', parisRouter);
app.use('/annapurna', annapurnaRouter);
app.use('/searchresults', searchresultsRouter);
app.use('/wanttogo', wanttogoRouter);
app.use('/bali', baliRouter);
app.use('/rome', romeRouter);
app.use('/santorini', santoriniRouter);
//TODO-----
// app.use('/home', homeRouter);
// app.use('/registration', registrationRouter);
//---------




app.listen(PORT || 3000, () => console.log(`Server Online. Listening on port ${PORT}`));

