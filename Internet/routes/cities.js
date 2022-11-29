const citiesController = require('../controllers/citiesController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('cities');
});

router.post('/', citiesController.cities);



module.exports = router;
