const loginController = require('../controllers/loginController');
const router = require('express').Router();
const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");

router.get('/', (req, res) => {
    if(req.session.username == undefined)
        res.render('login');
    else
        res.render('home');
});

router.post('/', loginController.login)


module.exports = router;