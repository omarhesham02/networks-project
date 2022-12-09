const login2Controller = require('../controllers/login2Controller');
const router = require('express').Router();
const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");

router.get('/', (req, res) => {
    res.render('login2');
});

router.post('/', login2Controller.login2);



module.exports = router;