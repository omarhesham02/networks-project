const errorController = require('../controllers/errorController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('home');
});

router.post('/', errorController.error);



module.exports = router;