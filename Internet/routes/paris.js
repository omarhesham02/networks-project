const parisController = require('../controllers/parisController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('paris');
});

router.post('/', parisController.paris);



module.exports = router;