// Require dotenv
require('dotenv').config();

const searchresultsController = require('../controllers/searchresultsController');
const router = require('express').Router();
const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");

router.get('/', (req, res) => {
    res.render('searchresults');
});

router.post('/', searchresultsController.searchresults);



module.exports = router;