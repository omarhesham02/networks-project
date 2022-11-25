const citiesCtrl = require('../controllers/citiesCtrl');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('cities');
});

router.post('/', citiesCtrl.cities);



module.exports = router;
