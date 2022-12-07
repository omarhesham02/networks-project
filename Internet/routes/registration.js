const registrationController = require('../controllers/registrationController');
const router = require('express').Router();
const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");

router.get('/', (req, res) => {
    res.render('registration');
});

router.post('/', registrationController.registration);



module.exports = router;