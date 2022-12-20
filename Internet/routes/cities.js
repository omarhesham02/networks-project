const citiesController = require('../controllers/citiesController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('cities');
});

router.post('/', citiesController.cities);



module.exports = router;
