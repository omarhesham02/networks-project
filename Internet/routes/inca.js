const incaController = require('../controllers/incaController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('inca');
});

router.post('/', incaController.inca);



module.exports = router;