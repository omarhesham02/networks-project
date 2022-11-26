// Require dotenv
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || 'mongodb://0.0.0.0:27017';

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

<<<<<<< Updated upstream
=======
// Routers
const loginRouter = require('./routes/login');
const hikingRouter = require('./routes/hiking'); 

>>>>>>> Stashed changes
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
//TODO-----
// const baliRouter = require('./routes/bali');
// const hikingRouter = require('./routes/hiking');
// const homeRouter = require('./routes/home');
// const incaRouter = require('./routes/inca');
// const parisRouter = require('./routes/paris');
// const registrationRouter = require('./routes/registration');
// const romeRouter = require('./routes/rome');
// const santoriniRouter = require('./routes/santorini');
// const searchRouter = require('./routes/searchresults');
// const wanttogoRouter = require('./routes/wanttogo');
//---------



// Router bindings
app.use('/', loginRouter);
<<<<<<< Updated upstream
app.use('/cities', citiesRouter);
app.use('/islands', islandsRouter);
//TODO-----
// app.use('/bali', baliRouter);
// app.use('/hiking', hikingRouter);
// app.use('/home', homeRouter);
// app.use('/inca', incaRouter);
// app.use('/paris', parisRouter);
// app.use('/registration', registrationRouter);
// app.use('/rome', romeRouter);
// app.use('/santorini', santoriniRouter);
// app.use('/searchresults', searchRouter);
// app.use('/wanttogo', wanttogoRouter);
//---------

=======
app.use('/', hikingRouter);
>>>>>>> Stashed changes



app.listen(PORT || 3000, () => console.log(`Server Online. Listening on port ${PORT}`));

