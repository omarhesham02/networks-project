// Require dotenv
require('dotenv').config();

const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");

function login(req, res, next) {
    res.render('home');
}

module.exports = { login };