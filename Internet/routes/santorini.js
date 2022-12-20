const santoriniController = require('../controllers/santoriniController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('santorini');
});

router.post('/', santoriniController.santorini);



module.exports = router;