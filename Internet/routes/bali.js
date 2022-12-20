const baliController = require('../controllers/baliController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('bali');
});

router.post('/', baliController.bali);



module.exports = router;
