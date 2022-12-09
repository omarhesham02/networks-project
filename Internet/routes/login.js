const loginController = require('../controllers/loginController');
const router = require('express').Router();
const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', loginController.login);



module.exports = router;