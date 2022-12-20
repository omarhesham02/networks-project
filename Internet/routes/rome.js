const romeController = require('../controllers/romeController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('rome');
});

router.post('/', romeController.rome);



module.exports = router;