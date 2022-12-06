// Require dotenv
require('dotenv').config();

const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");

function wanttogo(req, res, next) {
    res.render('wanttogo');
}

module.exports = { wanttogo };